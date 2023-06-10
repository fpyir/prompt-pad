"use client";

import { nanoid } from "nanoid";
import { ClientChatMessage } from "../client_models";
import { useStorage } from "@/utils/use_storage";

export function useChatMessages(chatId: number, threadId: number) {
  const {
    data: chatMessages,
    isLoading,
    error,
    setData,
  } = useStorage<ClientChatMessage[]>(`chat_messages_${chatId}`);

  const addChatMessage = async ({
    content,
    agentId,
    agentName,
    agentType,
  }: Omit<ClientChatMessage, "id" | "createdAt" | "chatId" | "threadId">) => {
    const newChatMessage: ClientChatMessage = {
      id: nanoid(),
      content,
      createdAt: new Date(),
      chatId,
      threadId,
      agentType,
      agentName,
      agentId,
    };

    await setData([...(chatMessages ?? []), newChatMessage]);
  };

  const clearChatMessages = async () => {
    await setData([]);
  };

  return {
    chatMessages: chatMessages ?? [],
    isLoading,
    error,
    addChatMessage,
    clearChatMessages,
  };
}
