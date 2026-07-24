import DetailsHeading2 from "../components/DetailsHeading2";

export default {
  title: "Components/DetailsHeading2",
  component: DetailsHeading2,
  tags: ["autodocs"],
  argTypes: {
    reference: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
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

export const Default = {
  args: {
    reference: "Testdrive number #TO1234",
    title: "Thank you!",
    description: "We've received your documents",
  },
};