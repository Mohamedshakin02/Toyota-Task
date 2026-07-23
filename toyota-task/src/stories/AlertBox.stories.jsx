import AlertBox from "../components/AlertBox";

export default {
  title: "Components/AlertBox",
  component: AlertBox,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    message: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    title: "Something went wrong",
    message:
      "We're having trouble connecting. Your details are saved locally; we will retry automatically.",
  },
};