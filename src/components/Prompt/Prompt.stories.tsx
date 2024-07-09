import Prompt from ".";
export default {
  title: "MyComponents/Prompt",
  component: Prompt,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argsTypes: {
    isOpen: {
      control: "boolean",
    },
  },
  //   argTypes: {
  //     children: {
  //       description: "Any react component ",
  //       control: {
  //         type: "text",
  //       },
  //     },
  //     variant: {
  //       options: ["default", "outlined", "tertiary1", "teriary2", "disabled"],
  //       control: { type: "radio" },
  //     },
  //     disabled: {
  //       control: "boolean",
  //     },
  //   },
};

export const Prompt1 = {
  args: {
    isOpen: true,
    // children: "Submit",
    // variant: "default",
    // disabled: true,
  },
};
