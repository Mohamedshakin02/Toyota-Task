import { useState } from "react";
import CheckBox from "../components/CheckBox";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
};

const InteractiveTemplate = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <CheckBox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const MarketingConsent = {
  args: {
    id: "marketing",
    children: (
      <>
        I consent to receive{" "}
        <span className="text-red-600 underline">
          Marketing offers
        </span>{" "}
        and information.
      </>
    ),
  },
};

export const TermsAndConditions = {
  render: InteractiveTemplate,
  args: {
    id: "terms",
    checked: true,
    children: (
      <>
        I have read and agree to the{" "}
        <span className="text-red-600 underline">
          Terms &amp; conditions
        </span>
      </>
    ),
  },
};

export const LargeCheckbox = {
  args: {
    id: "checkbox-1",
    inputClassName: "w-6 h-6 lg:w-4 lg:h-4",
    children:
      "I have read and understand the liability and insurance terms above.",
  },
};