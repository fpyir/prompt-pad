import React from "react";
import classNames from "classnames";
import { ClientChatMessage } from "@/persist/client_models";
import { Avatar } from "../avatar/Avatar";

export type ChatMessageProps = {
  message: ClientChatMessage;
  latestThreadId?: number;
  nextThreadId?: number;
};

export const ChatMessageDisplay: React.FC<ChatMessageProps> = ({
  message: { content, threadId, agentId, agentType },
  latestThreadId,
  nextThreadId,
}) => {
  const showDivider =
    (latestThreadId && !nextThreadId && latestThreadId > threadId) ||
    (latestThreadId && nextThreadId && nextThreadId > threadId);

  const isDividerBottomOfList =
    latestThreadId && !nextThreadId && latestThreadId > threadId;

  return (
    <>
      <div
        className={classNames(
          "p-2",
          "border",
          "border-gray-200",
          "my-2",
          "max-w-4xl"
        )}
      >
        <span>
          <Avatar userId={`${agentId}-${agentType}`} />
        </span>
        {content} - {threadId}
      </div>
      {showDivider && (
        <div
          className={classNames(
            "bg-slate-500",
            "h-1",
            "w-full",
            isDividerBottomOfList ? "mt-8" : "my-8",
            "max-w-4xl"
          )}
        />
      )}
    </>
  );
};
