import React from "react";
import classNames from "classnames";
import { ClientChatMessage } from "@/persist/client_models";

export type ChatMessageProps = {
  message: ClientChatMessage;
};

export const ChatMessageDisplay: React.FC<ChatMessageProps> = ({ message }) => (
  <div
    className={classNames(
      "p-2",
      "border",
      "border-gray-200",
      "my-2",
      "max-w-4xl"
    )}
  >
    {message.content}
  </div>
);
