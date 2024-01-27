import { Search } from "../Icons";

const SearchInput = ({ className }) => {
  return (
    <label
      htmlFor="search"
      className={`relative overflow-hidden rounded-[20px]  ${className}`}
    >
      <Search className="absolute left-4 top-[50%] translate-y-[-50%] text-[#78828A]" />
      <input
        id="search"
        placeholder="Search..."
        className="block bg-transparent w-full h-full text-base pl-[42px] pr-4 py-2 focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400"
      />
    </label>
  );
};

export default SearchInput;
