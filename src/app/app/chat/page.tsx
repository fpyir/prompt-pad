"use client";
import React, { useState, KeyboardEvent } from "react";
import { AutoResizeTextArea } from "@/widgets/AutoResizeTextArea";
import classNames from "classnames";
import "tailwindcss/tailwind.css";
import { ChatMessageDisplay } from "@/features/chat/ChatMessageDisplay";
import { useChatMessages } from "@/persist/hooks/useChatMessages";
import { useUserAgent } from "@/utils/use_user_agent";
import { useChat } from "@/persist/hooks/useChat";

const MyPage: React.FC = () => {
  const { userAgent } = useUserAgent();
  const { chat, chatMessages, addChatMessage, clearChatMessages } = useChat(1);

  const [currentMessage, setCurrentMessage] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.metaKey) {
      event.preventDefault();
      addChatMessage({
        content: currentMessage,
        agentId: userAgent.id,
        agentName: userAgent.name,
        agentType: userAgent.type,
      });
      setCurrentMessage("");
    }
  };

  const handleClearChat = () => {
    clearChatMessages(); // Call the function to clear chat messages
  };

  return (
    <div className={classNames("flex flex-col justify-between")}>
      <div className={classNames("p-4", "flex-grow", "overflow-scroll")}>
        {chatMessages.map((message, i) => (
          <ChatMessageDisplay key={i} message={message} />
        ))}
      </div>
      <div
        className={classNames(
          "flex w-full",
          "sticky bottom-0",
          "bg-white",
          "p-4"
        )}
      >
        <AutoResizeTextArea
          className={classNames(
            "p-4",
            "w-full",
            "h-full",
            "min-h-[120px]",
            "max-w-4xl",
            "border-t",
            "border-gray-200"
          )}
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="ml-6 align-top flex flex-col space-y-4">
          <button
            onClick={handleClearChat}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Add Divider
          </button>
          <button
            onClick={handleClearChat}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
