import { useStorage } from "@/utils/use_storage";
import { ClientChat, MockChat } from "../client_models";
import { useChatMessages } from "./useChatMessages";

export function useChat(chatId: number) {
  const {
    data: chat,
    isLoading: chatIsLoading,
    error: chatError,
    setData: setChat,
  } = useStorage<ClientChat>(`chat_${chatId}`, MockChat);

  const {
    chatMessages,
    isLoading: messagesIsLoading,
    error: messagesError,
    addChatMessage,
    clearChatMessages,
  } = useChatMessages(chatId, chat?.latestThreadId ?? 1);

  const startNewThread = async () => {
    if (!chat) {
      return;
    }

    const newThreadId = (chat?.latestThreadId ?? 1) + 1;
    await setChat({
      ...chat,
      latestThreadId: newThreadId,
    });
  };

  const clearChat = async () => {
    if (!chat) {
      return;
    }

    await setChat({ ...chat, latestThreadId: 1 });
    await clearChatMessages();
  };

  console.log(chat);

  return {
    chat,
    chatIsLoading,
    chatError,

    chatMessages,
    messagesIsLoading,
    messagesError,

    startNewThread,
    addChatMessage,
    clearChat,
  };
}
