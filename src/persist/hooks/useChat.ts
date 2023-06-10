import { useStorage } from "@/utils/use_storage";
import { ClientChat } from "../client_models";
import { useChatMessages } from "./useChatMessages";

export function useChat(chatId: number) {
  const {
    data: chat,
    isLoading: chatIsLoading,
    error: chatError,
  } = useStorage<ClientChat>(`chat_${chatId}`);

  const {
    chatMessages,
    isLoading: messagesIsLoading,
    error: messagesError,
    addChatMessage,
    clearChatMessages,
  } = useChatMessages(chatId, chat?.latestThreadId ?? 1);

  return {
    chat,
    chatIsLoading,
    chatError,

    chatMessages,
    messagesIsLoading,
    messagesError,

    addChatMessage,
    clearChatMessages,
  };
}
