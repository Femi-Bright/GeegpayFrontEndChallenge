import React from "react";
import { DocumentDownload } from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const TableRow = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

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
                          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
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
