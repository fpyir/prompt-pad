"use client";
import React, { useState, KeyboardEvent } from "react";
import { AutoResizeTextArea } from "@/widgets/AutoResizeTextArea";
import classNames from "classnames";
import "tailwindcss/tailwind.css";
import { ChatMessageDisplay } from "@/features/chat/ChatMessageDisplay";
import { useChatMessages } from "@/persist/hooks/useChatMessages";
import { useUserAgent } from "@/utils/use_user_agent";
import { useChat } from "@/persist/hooks/useChat";
import { Button } from "@/widgets/button";

const MyPage: React.FC = () => {
  const { userAgent } = useUserAgent();
  const { chat, chatMessages, addChatMessage, clearChat, startNewThread } =
    useChat(1);

  const [currentMessage, setCurrentMessage] = useState("");

  const handleAddChatMessage = () => {
    if (currentMessage.length < 1) {
      return;
    }

    addChatMessage({
      content: currentMessage,
      agentId: userAgent.id,
      agentName: userAgent.name,
      agentType: userAgent.type,
    });
    setCurrentMessage("");
  };

  const handleClearChat = () => {
    clearChat(); // Call the function to clear chat messages
  };

  return (
    <div className={classNames("flex flex-col justify-between")}>
      <div className={classNames("p-4", "flex-grow", "overflow-scroll")}>
        {chatMessages.map((message, i) => (
          <ChatMessageDisplay
            key={i}
            message={message}
            latestThreadId={chat?.latestThreadId}
            nextThreadId={chatMessages[i + 1]?.threadId}
          />
        ))}
      </div>
      <div
        className={classNames(
          "flex flex-col w-full",
          "max-w-4xl",
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
            "border-t",
            "border-gray-200"
          )}
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <div className="mt-6 align-top flex space-x-4">
          <Button
            type="button"
            onClick={handleAddChatMessage}
            variant="primary"
            shortcut="meta+enter"
          >
            Send Message
          </Button>
          <Button
            type="button"
            onClick={startNewThread}
            variant="secondary"
            shortcut="alt+t"
          >
            New Thread
          </Button>

          <Button
            type="button"
            onClick={handleClearChat}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
            shortcut="meta+alt+x"
          >
            Clear Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
