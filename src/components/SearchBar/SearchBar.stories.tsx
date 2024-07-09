import SearchBar from ".";

export default {
  title: "MyComponents/SearchBar",
  component: SearchBar,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {
        type: "text",
      },
    },
  },
};

export const SearchBarComp = {
  args: {
    value: "Search",
  },
};
