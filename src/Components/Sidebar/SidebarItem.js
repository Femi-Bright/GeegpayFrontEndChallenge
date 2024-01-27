import { BorderRight } from "../Icons";

const SidebarItem = ({
  Icon,
  isActive,
  noBorder,
  className,
  iconClassName,
  onClick,
  text,
  isFullWidth,
}) => {
  return (
    <li
      onClick={onClick}
      className={`relative sidebar-item transition-colors duration-300 ease-out ${
        isActive
          ? "text-gray-900 dark:text-primary"
          : "text-gray-400 hover:text-gray-900 dark:hover:text-primary"
      } ${className}`}
    >
      <a
        href="/"
        onClick={(e) => e.preventDefault()}
        {...(isActive ? { "aria-current": "page" } : {})}
        className={`flex w-full items-center p-[10px] ${
          !isFullWidth && "justify-center"
        }`}
      >
        <Icon isActive={isActive} className={iconClassName} />
        <span
          className={` ${
            isFullWidth ? "w-auto ml-4" : "w-0 overflow-hidden"
          } transition-[width] duration-700`}
        >
          {text}
        </span>
      </a>
      {!noBorder && (
        <BorderRight
          className={`${
            !isActive && "opacity-0"
          } border-right-icon absolute right-0 top-[50%] translate-y-[-50%] text-gray-900 dark:text-white`}
        />
      )}
    </li>
  );
};

export default SidebarItem;
