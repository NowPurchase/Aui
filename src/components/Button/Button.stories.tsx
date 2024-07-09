import Button from ".";

export default {
  title: "MyComponents/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Any react component ",
      control: {
        type: "text",
      },
    },
    variant: {
      options: ["default", "outlined", "tertiary1", "teriary2", "disabled"],
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const Button1 = {
  args: {
    children: "Submit",
    variant: "default",
    disabled: true,
  },
};
