import React from "react";
import { DocumentDownload } from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Amount from "./BarChart/Amount";

const TableRow = ({ order }) => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const print = () => {
    window.print();
  };
  return (
    <>
      <tr className="text-xs md:text-base border-r-2 border-transparent hover:border-gray-300 transition-[border-color] duration-300 ease-out">
        <td className="py-4 text-[#3A3F51] dark:text-white flex items-center font-medium">
          <img
            src={order.avatar}
            className="size-[32px] rounded-full object-cover mr-2"
            alt="avatar"
          />
          {order.name}
        </td>
        <td className="py-4 text-gray-500 dark:text-gray-200">{order.date}</td>
        <td className="py-4 text-[#0D062D] dark:text-gray-400 font-medium">
          ${order.amount}
        </td>
        <td
          className={`py-4 ${
            order.status === "Paid" ? "text-primary" : "text-[#ED544E]"
          }`}
        >
          {order.status}
        </td>
        <td className="py-4 text-[#0D062D] dark:text-gray-300 text-xs md:text-sm">
          <button onClick={openModal} className="flex items-center">
            <DocumentDownload className="text-[#292D32] dark:text-gray-300 mr-[6px]" />
            View
          </button>
        </td>
      </tr>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[200]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex items-center justify-between font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    <div>
                      Receipt
                      <span
                        className={`ml-3 inline-block text-sm ${
                          order.status === "Paid"
                            ? "text-primary"
                            : "text-[#ED544E]"
                        }`}
                      >
                        ({order.status})
                      </span>
                    </div>
                    <button
                      onClick={print}
                      className="p-2 rounded-full bg-primary bg-opacity-10 print:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-green-700 dark:text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className="my-8 font-medium">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-200">
                        Order fee
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-200">
                        ${eval(order.amount.replace(",", "") - 500)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <p className="text-sm text-gray-500 dark:text-gray-200">
                        Service tax
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-200">
                        $500
                      </p>
                    </div>
                    <div
                      className={`flex justify-between items-center text-lg ${
                        order.status === "Paid"
                          ? "text-primary"
                          : "text-[#ED544E]"
                      }`}
                    >
                      <p>Total</p>
                      <p>${order.amount}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end print:hidden">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TableRow;
