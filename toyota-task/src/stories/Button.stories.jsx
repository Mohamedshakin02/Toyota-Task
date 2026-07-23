import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "wide"],
    },
    width: {
      control: "select",
      options: ["auto", "full", "quarter"],
    },
    rounded: {
      control: "select",
      options: ["none", "md"],
    },
    showArrow: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export const PrimaryNext = {
  args: {
    label: "Next",
    variant: "primary",
    showArrow: true,
  },
};

export const SecondaryNext = {
  args: {
    label: "Next",
    variant: "secondary",
    showArrow: true,
  },
};

export const SubmitPrimary = {
  args: {
    label: "Submit",
    variant: "primary",
    className: "lg:py-3",
  },
};

export const SubmitSecondary = {
  args: {
    label: "Submit",
    variant: "secondary",
    className: "lg:py-3",
  },
};

export const Cancel = {
  args: {
    label: "Cancel",
    variant: "outline",
    width: "quarter",
    size: "wide",
    className: "text-lg",
  },
};

export const Confirm = {
  args: {
    label: "Confirm",
    variant: "primary",
    showArrow: true,
  },
};

export const SendVerificationCode = {
  args: {
    label: "Send Verification Code",
    type: "submit",
    variant: "secondary",
    width: "full",
  },
};

export const ExploreLandCruiserHybrid = {
  args: {
    label: "Explore Land Cruiser Hybrid",
    variant: "primary",
  },
};

export const ConfirmCancellation = {
  args: {
    label: "Confirm cancellation",
    variant: "primary",
    width: "full",
    rounded: "md",
  },
};

export const Reschedule = {
  args: {
    label: "Reschedule",
    variant: "outline",
    width: "full",
    rounded: "md",
  },
};

export const Decline = {
  args: {
    label: "Decline",
    variant: "outline",
    width: "full",
    size: "sm",
    className: "w-auto! lg:w-full! lg:px-0 lg:py-3",
  },
};