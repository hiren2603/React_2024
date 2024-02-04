import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { User } from "../components";
import {
  SkipNextIcon,
  SkipPrevIcon,
  NextIcon,
  PrevIcon,
} from "../assets/icons";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div className="container mx-auto w-[90%] mt-5">
      <table className=" table-auto w-full border-spacing-1 border-separate">
        <caption className="caption-top text-gray-300 text-4xl py-2">
          All Users
        </caption>
        <thead>
          <tr className="border border-gray-500 bg-gray-600 h-16">
            <th className="w-16">Id</th>
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
      </table>
    </div>
  );
};

export default Users;
