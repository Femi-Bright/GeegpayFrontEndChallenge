import { useEffect, useState } from "react";

const Month = ({ month, amount, isHighest, worth }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeight((amount * 245) / 50);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [amount]);
  return (
    <div className="chart-month relative text-gray-600 dark:text-gray-50 text-sm">
      <p className="hidden md:w-[30px] md:block text-[8px] md:text-base text-center">
        {month}
      </p>
      <p className="md:hidden md:w-[30px] text-[8px] md:text-base text-center">
        {month === "Jul" ? "Jl" : month.slice(0, 2)}
      </p>
      <div
        style={{ height: `${height}px` }}
        className={`chart-bar absolute w-2 md:w-[30px] cursor-pointer  ${
          amount >= 35
            ? "bg-gradient-to-t from-[#d7fcf0] to-primary"
            : "bg-primary bg-opacity-20 dark:bg-opacity-25"
        } bottom-[25px] md:bottom-[32px] rounded-t-[20px] left-[50%] translate-x-[-50%]`}
      >
        <div className="w-full h-full relative">
          <div
            className={`${
              isHighest ? "opacity-0 md:opacity-100" : "opacity-0"
            } title absolute rounded-[8px] bg-[#090C2C] dark:bg-gray-200 left-[50%] translate-x-[-50%] top-[-40px]`}
          >
            <div className="relative">
              <span className="block px-3 py-2 text-white dark:text-gray-900 text-xs font-medium">
                ${worth}
              </span>
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-4px] left-[50%] translate-x-[-50%] text-[#090C2C] dark:text-gray-200"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H12L6 5.97705L0 0Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Month;
