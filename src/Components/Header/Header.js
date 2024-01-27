import { ArrowDown, Bell } from "../Icons";
import avatar from "../../Asset/avatars/justin-bergson.jpg";
import SearchInput from "./SearchInput";
import MyDatePicker from "./MyDatePicker";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
const Header = () => {
  return (
    <header className="fixed w-[calc(100%-56px)] lg:w-[calc(100%-80px)] z-50 top-0 right-0 h-16 lg:h-[88px] px-2 md:px-4 bg-gray-50 dark:bg-gray-800 flex items-center justify-between border-b border-[E5EAEF] dark:border-gray-600">
      <h1 className="hidden lg:block text-base lg:text-[20px] font-semibold text-[#26282C] dark:text-white">
        Dashboard
      </h1>
      <div className="flex items-center w-full lg:w-auto justify-between font-[Inter]">
        <SearchInput className=" w-36 md:min-w-[350px] bg-white dark:bg-gray-900 border border-[#DADDDD] dark:border-gray-900 mr-[22px]" />
        <div className="flex items-center space-x-4">
          <MyDatePicker className=" hidden xl:flex mr-4 " />

          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <Menu.Button>
                  <div
                    title="Nofitications"
                    className="size-10 flex items-center justify-center rounded-full dark:bg-gray-900 border border-[#DADDDD] dark:border-gray-900"
                  >
                    <Bell className="text-[#0D062D] dark:text-white" />
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute overflow-y-hidden right-[-40px] md:right-0  top-10 mt-2 w-72 origin-top-right divide-y text-gray-600 dark:text-gray-200 divide-gray-100 dark:divide-gray-700 rounded-[20px] bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="">
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <img
                            src={require("../../Asset/avatars/Marcus Bergson.jpg")}
                            className="size-[32px] rounded-full object-cover mr-2"
                            alt="avatar"
                          />
                          <span>
                            Marcus Beron paid <b>$80,000</b>
                          </span>
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="">
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <img
                            src={require("../../Asset/avatars/Corey Schleifer.jpg")}
                            className="size-[32px] rounded-full object-cover mr-2"
                            alt="avatar"
                          />
                          <span>
                            Corey Schleifer paid <b>$87,000</b>
                          </span>
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="">
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <img
                            src={require("../../Asset/avatars/Phillip Lubin.jpg")}
                            className="size-[32px] rounded-full object-cover mr-2"
                            alt="avatar"
                          />
                          <span>
                            Phillip Lubin paid <b>$78,000</b>
                          </span>
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <Menu.Button>
                  <div className="flex  md:px-[10px] md:py-[6px] items-center border dark:bg-gray-900 border-[#DADDDD] dark:border-gray-900 rounded-[28px]">
                    <img
                      src={avatar}
                      className="size-[38px] rounded-full object-cover"
                      alt="avatar"
                    />
                    <div className="text-right  hidden lg:block ml-2">
                      <p className="text-[#26282C] dark:text-white text-base">
                        Justin Bergson
                      </p>
                      <p className="text-[#787486] dark:text-white text-sm">
                        Justin@gmail.com
                      </p>
                    </div>
                    <ArrowDown className="text-[#0D062D] ml-3 hidden md:block  dark:text-white" />
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute overflow-y-hidden right-0 top-14 mt-2 w-56 origin-top-right divide-y text-gray-600 dark:text-gray-200 divide-gray-100 dark:divide-gray-700 rounded-[20px] bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="pb-1 ">
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                          <span>My profile</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>

                          <span>Edit profile</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                            />
                          </svg>

                          <span>Inbox</span>
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="pt-1">
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                          <span>Settings</span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          className={`hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-colors duration-300 group flex w-full items-center px-4 py-2 text-sm space-x-2`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                            />
                          </svg>
                          <span>Logout</span>
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
