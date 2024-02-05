import React, { useState } from "react";
import Input from "./Input";
import {
  SkipNextIcon,
  SkipPrevIcon,
  NextIcon,
  PrevIcon,
} from "../assets/icons";
function TableFooter() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleLimitChange = (e) => {
    setRowsPerPage(e.target.value);
  };

  return (
    <tfoot>
      <tr className="border border-gray-500 justify-center items-center bg-gray-600 h-16">
        <td colSpan={6} className="text-left">
          <div className="flex items-center space-x-4 pl-4">
            <span className="text-sm">Records per Page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => handleLimitChange(e)}
              className="p-2
                    text-black 
                    rounded-md bg-gray-200 
                    outline-none
                    border-none"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </td>
        <td colSpan={2} className="text-right">
          <div className="flex justify-end items-center space-x-4 pr-4">
            <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
              <SkipPrevIcon />
            </button>
            <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
              <PrevIcon />
            </button>
            <span className="text-sm">
              Page: {1} of {5}
            </span>
            <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
              <NextIcon />
            </button>
            <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
              <SkipNextIcon />
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;