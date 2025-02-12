import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button, { Props } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outlined", "tertiary", "icon", "text"],
    },
    direction: {
      control: "select",
      options: ["ltr", "rtl", "top-to-bottom", "bottom-to-top"],
    },
    weight: {
      control: "select",
      options: ["light", "normal", "semi-bold", "bold"],
    },
    colorVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "warning"],
    },
    fullWidth: { control: "boolean" },
    hasIcon: { control: "boolean" },
    loading: { control: "boolean" },
    active: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me",
    variant: "primary",
    direction: "ltr",
    weight: "normal",
    fullWidth: false,
    hasIcon: false,
    loading: false,
    active: false,
  },
};

export const WithIcon: Story = {
  args: {
    children: "Button with Icon",
    variant: "primary",
    hasIcon: true,
    colorVariant: "success",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "primary",
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "secondary",
    fullWidth: true,
  },
};
