import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Button,
  CalendarCell as CalendarCellRac,
  CalendarGridBody as CalendarGridBodyRac,
  CalendarGridHeader as CalendarGridHeaderRac,
  CalendarGrid as CalendarGridRac,
  CalendarHeaderCell as CalendarHeaderCellRac,
  Calendar as CalendarRac,
  composeRenderProps,
  Heading as HeadingRac,
  RangeCalendar as RangeCalendarRac,
} from "react-aria-components";

import { cn } from "@/lib/utils";

function CalendarHeader() {

  return (
    <header className="flex w-full items-center gap-1 rounded-t-md bg-gray-200 p-2">
      <Button
        className="flex size-9 items-center justify-center rounded-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
        slot="previous">
        <ChevronLeftIcon size={16} />
      </Button>
      <HeadingRac className="grow text-center font-medium text-sm" />
      <Button
        className="flex size-9 items-center justify-center rounded-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
        slot="next">
        <ChevronRightIcon size={16} className="text-black" />
      </Button>
    </header>
  );
}

function CalendarGridComponent({ isRange = false }) {
  return (
    
    <CalendarGridRac className="w-full border-collapse p-2 bg-white rounded-sm" weekdayStyle="short">
      <CalendarGridHeaderRac>
        {(day) => (
          <CalendarHeaderCellRac className="font-medium text-muted-foreground/80 text-xs py-2 pt-6 pb-5 text-center">
            {day.toString().substring(0, 2)}
          </CalendarHeaderCellRac>
        )}
      </CalendarGridHeaderRac>

      <CalendarGridBodyRac className="p-2 [&_td]:px-0 [&_td]:py-0.5 [&_td]:w-[14.28%]">
        {(date) => (
          <CalendarCellRac
            className={cn(
              "relative flex w-full h-10 lg:h-12 items-center justify-center whitespace-nowrap rounded-md p-0 font-normal text-foreground text-sm outline-none duration-150 data-selected:bg-red-600 data-selected:text-white",
              "data-outside-month:text-gray-600 data-disabled:opacity-50"
            )}
            date={date}
          />
        )}
      </CalendarGridBodyRac>
    </CalendarGridRac>
  );
}

function Calendar({
  className,
  ...props
}) {
  return (
    <CalendarRac
      {...props}
      className={composeRenderProps(className, (className) =>
        // Reverted to w-full
        cn("w-full bg-white", className))}>
      <CalendarHeader />
      <CalendarGridComponent />
    </CalendarRac>
  );
}

function RangeCalendar({
  className,
  ...props
}) {
  return (
    <RangeCalendarRac
      {...props}
      className={composeRenderProps(className, (className) =>
        // Reverted to w-full
        cn("w-full bg-white", className))}>
      <CalendarHeader />
      <CalendarGridComponent isRange />
    </RangeCalendarRac>
  );
}

export { Calendar, RangeCalendar };