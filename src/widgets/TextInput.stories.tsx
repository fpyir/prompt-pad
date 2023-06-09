import { useState } from "react";
import { TextInput, TextInputProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default {
  component: TextInput,
  title: "TextInput",
  argTypes: {
    label: { control: "text" },
    id: { control: "text" },
    onChange: { action: "changed" },
    value: { control: "text" },
    valid: { control: "boolean" },
    errorMessage: { control: "text" },
  },
} as Meta;

export const Playground: StoryObj<TextInputProps> = {
  render: (args: TextInputProps) => (
    <TextInput containerClassName="max-w-xs" {...args} />
  ),
  args: {
    label: "Email",
    id: "email",
    value: "",
    valid: true,
    errorMessage: "",
    placeholder: "Enter an email",
  },
};

export const Icons: StoryObj<TextInputProps> = {
  render: (args) => <TextInput containerClassName="max-w-xs" {...args} />,
  args: {
    ...Playground.args,
    icon: <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />,
    placeholder: "Placeholder",
  },
  parameters: { controls: { include: [] } },
};

export const ValidInput: StoryObj<TextInputProps> = {
  render: (args) => <TextInput containerClassName="max-w-xs" {...args} />,
  args: {
    ...Playground.args,
    value: "ValidInput",
    valid: true,
  },
  parameters: { controls: { include: [] } },
};

export const InvalidInput: StoryObj<TextInputProps> = {
  render: (args) => <TextInput containerClassName="max-w-xs" {...args} />,
  args: {
    ...Playground.args,
    value: "InvalidInput",
    valid: false,
    errorMessage: "This is an invalid input",
  },
  parameters: { controls: { include: [] } },
};
