import { useState } from "react";
import { getLocalTimeZone, today } from "@internationalized/date";

import { Calendar } from "../components/ui/calendar-rac";

export default {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [date, setDate] = useState(today(getLocalTimeZone()));

  return (
    <div className="max-w-full">
      <Calendar
        {...args}
        value={date}
        onChange={setDate}
      />
    </div>
  );
};

export const Default = {
  render: Template,
  args: {
    className: "rounded-md border bg-gray-200 p-2",
  },
};