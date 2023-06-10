export enum AgentType {
  ChatGPT3 = "ChatGPT3",
  Human = "Human",
}

export type ClientChat = {
  id: number;
  name: string;

  chatAgentId: number;
  chatAgentName: string;
  chatAgentType: AgentType;

  latestThreadId: number;

  chatMessages: ClientChatMessage[];
};

export type ClientChatMessage = {
  id: string;
  content: string;
  createdAt: Date;

  chatId: number;
  threadId: number;

  agentType: AgentType;
  agentName: string;
  agentId: number;
};

export type ClientAgent = {
  id: number;
  name: string;
  type: AgentType;
};

export const MockUserAgent: ClientAgent = {
  id: 1,
  name: "User",
  type: AgentType.Human,
};

export const MockChatGPTAgent: ClientAgent = {
  id: 2,
  name: "ChatGPT",
  type: AgentType.ChatGPT3,
};

export const MockChat: ClientChat = {
  id: 1,
  name: "Mock Chat",
  chatAgentId: MockChatGPTAgent.id,
  chatAgentName: MockChatGPTAgent.name,
  chatAgentType: MockChatGPTAgent.type,

  latestThreadId: 1,

  chatMessages: [],
};
