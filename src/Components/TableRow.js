import React from "react";
import { DocumentDownload } from "./Icons";

const TableRow = ({ order }) => {
  return (
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
        <button className="flex items-center">
          <DocumentDownload className="text-[#292D32] dark:text-gray-300 mr-[6px]" />
          View
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
