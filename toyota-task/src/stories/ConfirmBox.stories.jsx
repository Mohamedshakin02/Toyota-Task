import ConfirmBox from "../components/ConfirmBox";

export default {
  title: "Components/ConfirmBox",
  component: ConfirmBox,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    icon: {
      control: "text",
    },
    iconClassName: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    title: "Confirmation sent via WhatsApp/Email",
    description:
      "You'll receive a reminder 24 hours before your appointment.",
    icon: "bi-check-circle-fill",
    iconClassName: "text-green-500",
    className: "mt-10",
  },
};