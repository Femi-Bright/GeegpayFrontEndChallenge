import { ArrowDown } from "./Icons";

const CustomSelect = ({ onChange }) => {
  return (
    <div className="flex relative items-center cursor-pointer space-x-[10px] dark:bg-gray-900 border border-[#E1DFDF] dark:border-gray-900 rounded-[20px]">
      <select
        defaultValue="monthly"
        onChange={onChange}
        id="duration"
        className="z-[1] accent-primary pl-3 pr-10 cursor-pointer  appearance-none block py-[6px] text-sm text-[#3A3F51] bg-transparent focus:border-none focus:outline-none dark:text-gray-400"
      >
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <ArrowDown className="z-[0] cursor-pointer absolute right-3 text-black dark:text-gray-100" />
    </div>
  );
};

export default CustomSelect;
