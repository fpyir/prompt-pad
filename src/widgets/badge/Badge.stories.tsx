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

const BadgeDemo: React.FC<BadgeProps> = (props) => {
  return <Badge {...props} />;
};

export const Playground: StoryObj<BadgeProps> = {
  render: (args) => <BadgeDemo {...args} />,
  args: {
    removable: false,
    children: "Badge text",
  },
};

// Extra stories
export const DefaultBadge: StoryObj<BadgeProps> = {
  render: () => <BadgeDemo children="Default Badge" />,
  parameters: {
    controls: { include: [] },
  },
};

export const RemovableBadge: StoryObj<BadgeProps> = {
  render: () => (
    <BadgeDemo
      removable={true}
      onRemove={() => {}}
      children="Removable Badge"
    />
  ),
  parameters: {
    controls: { include: [] },
  },
};
