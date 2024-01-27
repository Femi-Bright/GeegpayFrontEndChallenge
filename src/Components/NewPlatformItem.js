const NewPlatformItem = ({
  data: { name, progress = 10, amount, percentage, color },
}) => {
  return (
    <li className="space-y-4 text-sm md:base">
      <p className="text-[#22242C] dark:text-white text-base md:text-lg font-semibold">
        {name}
      </p>
      <div className="h-3 w-full overflow-hidden bg-gray-200 dark:bg-gray-400 rounded-[40px]">
        <div
          className="min-h-full rounded-r-[40px]"
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-300 justify-between">
        <p className="">${amount}</p>
        <p className="">+{percentage}%</p>
      </div>
    </li>
  );
};

export default NewPlatformItem;
