import { useEffect, useState } from "react";
import logo from "../../Asset/logo.svg";
import {
  ArrowRight,
  BulkCategory,
  Discount,
  Info,
  Light,
  Logout,
  Moon,
  People,
  Settings,
  Square,
  Transactions,
} from "../Icons";
import SidebarItem from "../Sidebar/SidebarItem";

const Sidebar = () => {
  const [mode, setMode] = useState(localStorage.theme || "light");
  const [isFullWidth, setIsFullWidth] = useState(false);

  const setLightMode = () => {
    setMode("light");
  };
  const setDarkMode = () => {
    setMode("dark");
  };

  const toggleFullWidth = () => {
    setIsFullWidth((prev) => !prev);
  };

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [mode]);

  return (
    <aside
      className={`${
        isFullWidth ? "w-52" : "w-14 lg:w-20"
      } fixed z-[100] transition-[width] duration-300 top-0 left-0 h-full py-5 block bg-[#F7F8FA] dark:bg-gray-800 border-r border-[#EBECF2] dark:border-gray-900 overflow-hidden`}
    >
      <img src={logo} className="h-10 w-10 block mb-5 mx-auto" alt="Zapp" />
      <nav aria-labelledby="sidebarmenu" className="mb-4">
        <ul className="">
          <SidebarItem
            isFullWidth={isFullWidth}
            text="Dashboard"
            Icon={BulkCategory}
            isActive
          />
          <SidebarItem
            isFullWidth={isFullWidth}
            text="Transactions"
            Icon={Transactions}
          />
          <SidebarItem isFullWidth={isFullWidth} text="Users" Icon={People} />
          <SidebarItem isFullWidth={isFullWidth} text="Orders" Icon={Square} />
          <SidebarItem
            isFullWidth={isFullWidth}
            text="Coupons"
            Icon={Discount}
          />
          <SidebarItem isFullWidth={isFullWidth} text="Info" Icon={Info} />
        </ul>
      </nav>
      <div className="fixed lg:inline-block z-50 lg:z-0 bottom-5 lg:bottom-0 rotate-[270deg] lg:rotate-0 left-[100px] lg:static px-[10px]">
        <div className="px-2 py-4 rounded-[100px] space-y-4 border border-gray-200 dark:border-gray-700 lg:px-4 lg:border-none backdrop-blur-md lg:backdrop-blur-none bg-white/80 lg:bg-white dark:bg-gray-700/70 dark:lg:bg-gray-700 flex flex-col justify-center">
          <button onClick={setLightMode} className="flex self-center">
            <Light
              className={"text-white dark:text-gray-500"}
              isActive={mode === "light"}
            />
          </button>
          <button onClick={setDarkMode} className="flex self-center">
            <Moon className={"text-gray-800 dark:text-white"} />
          </button>
        </div>
      </div>
      <ul className="lg:absolute lg:w-full lg:bottom-5 lg:left-[50%] lg:translate-x-[-50%]">
        <SidebarItem
          isActive={isFullWidth}
          Icon={ArrowRight}
          text={isFullWidth && "Collapse"}
          iconClassName={isFullWidth && "rotate-[-180deg]"}
          onClick={toggleFullWidth}
          noBorder
          isFullWidth={isFullWidth}
        />
        <SidebarItem
          isFullWidth={isFullWidth}
          text="Settings"
          Icon={Settings}
        />
        <SidebarItem
          isFullWidth={isFullWidth}
          text="Logout"
          Icon={Logout}
          noBorder
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
