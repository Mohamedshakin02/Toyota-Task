import { useState } from "react";
import CategoryTabs from "../components/CategoryTabs";

export default {
  title: "Components/CategoryTabs",
  component: CategoryTabs,
  tags: ["autodocs"],
  argTypes: {
    roundedUnderline: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.selected);

  return (
    <CategoryTabs
      {...args}
      selected={selected}
      setSelected={setSelected}
    />
  );
};

export const VehicleCategories = {
  render: Template,
  args: {
    options: ["Hybrid", "Sedan", "SUV", "GR"],
    selected: "SUV",
    className: "text-lg lg:text-base",
    roundedUnderline: false,
  },
};

export const TimeSlots = {
  render: Template,
  args: {
    options: ["Morning", "Afternoon", "Evening"],
    selected: "Morning",
    className: "text-lg lg:text-base",
    roundedUnderline: true,
  },
};