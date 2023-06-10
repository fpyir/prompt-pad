import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

export default {
  title: "Widgets/Badge",
  component: Badge,
  argTypes: {
    removable: { control: "boolean" },
    onRemove: { action: "removed" },
    children: { control: "text" },
  },
} as Meta;

export const Playground: StoryObj<BadgeProps> = {
  args: {
    removable: false,
    children: "Badge text",
  },
};

// Extra stories
export const DefaultBadge: StoryObj<BadgeProps> = {
  args: {
    children: "Default Badge",
    removable: false,
  },
  parameters: {
    controls: { include: [] },
  },
};

export const RemovableBadge: StoryObj<BadgeProps> = {
  args: {
    removable: true,
    onRemove: () => {},
    children: "Removable Badge",
  },
  parameters: {
    controls: { include: [] },
  },
};
