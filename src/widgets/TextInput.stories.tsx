import { StoryObj, Meta } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Form } from "react-final-form";

export default {
  component: TextInput,
  argTypes: {
    icon: { control: "object" },
    label: { control: "text" },
    errorMessage: { control: "text" },
    placeholder: { control: "text" },
    containerClassName: { control: "text" },
  },
} as Meta;

const TextInputDemo: React.FC<TextInputProps> = (props) => {
  return (
    <div>
      <div className="prose mb-6">
        <h2>Text Input</h2>
        <p>
          Type something in the input field below. The input field will become
          invalid if you type "invalid".
        </p>
      </div>
      <Form
        onSubmit={() => {}}
        render={() => (
          <form className="max-w-xs">
            <TextInput
              {...props}
              name="demo"
              validate={(value) =>
                value === "invalid" ? "Invalid" : undefined
              }
            />
          </form>
        )}
      />
    </div>
  );
};

export const Playground: StoryObj<TextInputProps> = {
  render: (args) => <TextInputDemo {...args} />,
};

Playground.args = {
  icon: <ExclamationCircleIcon />,
  label: "Your Label",
  placeholder: "Placeholder",
  containerClassName: "container-class",
};
