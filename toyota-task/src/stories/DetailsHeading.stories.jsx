import DetailsHeading from "../components/DetailsHeading";

export default {
  title: "Components/DetailsHeading",
  component: DetailsHeading,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    align: {
      control: "radio",
      options: ["left", "center"],
    },
    className: {
      control: "text",
    },
    titleClassName: {
      control: "text",
    },
    descriptionClassName: {
      control: "text",
    },
  },
};

export const LicenseUpload = {
  args: {
    title: "Hi Ahmed,",
    description:
      "Please upload clear photos of both the front and back of your valid driver's license.",
    align: "left",
  },
};

export const Reschedule = {
  args: {
    title: "Hi Ahmed,",
    description:
      "Here are the details of your test drive booking. What would you like to do next?",
    align: "left",
  },
};