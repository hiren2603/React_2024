import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { User } from "../components";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { IoCaretBackSharp } from "react-icons/io5";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="container mx-auto w-[90%] flex flex-wrap h-full justify-center gap-8 mt-5">
      <table className=" table-auto w-full">
        <caption class="caption-top text-gray-300 text-4xl py-2">
          All Users
        </caption>
        <thead>
          <tr className="border border-gray-500 justify-center bg-gray-600 h-16">
            <th className="w-20">Id</th>
            <th>Avatar</th>
            <th>Fullname</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </tbody>
        <tfoot>
          <tr className="border border-gray-500 justify-center items-center bg-gray-600 h-16">
            <td colSpan={6} className="text-left">
              <div className="flex items-center space-x-4">
                <span className="text-sm">Records per Page:</span>
                <input
                  type="number"
                  className="w-16 px-2 py-1 border rounded-md"
                  // Add necessary props and state for handling input value
                />
              </div>
            </td>
            <td colSpan={2} className="text-right">
              <div className="flex justify-center items-center space-x-4">
                {/* You can use buttons or links for pagination */}
                <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path
                      d="M0.5 12V0H2.5V12H0.5ZM13.5 12L4.5 6L13.5 0V12Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M9.5 12L0.5 6L9.5 0V12Z" fill="white" />
                  </svg>
                </button>
                <span className="text-sm">
                  Page: {1} of {5}
                </span>
                <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M0.5 0L9.5 6L0.5 12L0.5 0Z" fill="white" />
                  </svg>
                </button>
                <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path
                      d="M13.5 0L13.5 12H11.5L11.5 0H13.5ZM0.5 0L9.5 6L0.5 12L0.5 0Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Users;
