// Storybook file for Button.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Widgets/Button",
  argTypes: {
    type: { control: "radio", options: ["button", "submit", "reset"] },
    onClick: { action: "clicked" },
    children: { control: "text" },
    className: { control: "text" },
    variant: { control: "radio", options: ["primary", "secondary"] },
  },
} as Meta;

const ButtonDemo: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

export const Playground: StoryObj<ButtonProps> = {
  render: (args) => <ButtonDemo {...args} />,
  args: {
    type: "button",
    children: "Button text",
    variant: "primary",
  },
};

export const Primary: StoryObj<ButtonProps> = {
  render: (args) => <ButtonDemo {...args} />,
  args: {
    type: "button",
    children: "Primary button",
    variant: "primary",
  },
  parameters: {
    controls: { include: [] },
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  render: (args) => <ButtonDemo {...args} />,
  args: {
    type: "button",
    children: "Secondary button",
    variant: "secondary",
  },
  parameters: {
    controls: { include: [] },
  },
};
