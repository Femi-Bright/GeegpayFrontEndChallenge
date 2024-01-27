import { Calendar } from "../Icons";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const formatDate = (date) => {
  // Split the date string into month, day, and year components
  const dateComponents = date.split("/");
  const month = parseInt(dateComponents[0], 10) - 1; // Months are zero-based in JavaScript
  const day = parseInt(dateComponents[1], 10);
  const year = parseInt(dateComponents[2], 10);

  // Create a new Date object
  return new Date(year, month, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const MyDatePicker = ({ className }) => {
  const [startDate, setStartDate] = useState(new Date());

  const Picker = forwardRef(({ value, onClick }, ref) => {
    return (
      <button
        title="Calendar"
        onClick={onClick}
        ref={ref}
        className={`px-4 py-3 items-center min-w-[193px] ${className}`}
      >
        <Calendar className="text-black dark:text-white mr-[10px]" />
        <span className=" text-[#26282C] dark:text-white text-sm font-medium">
          {formatDate(value)}
        </span>
      </button>
    );
  });

  return (
    <div className="relative">
      <DatePicker
        closeOnScroll={true}
        customInput={<Picker />}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default MyDatePicker;
