import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Input, TableHead, User } from "../components";

import TableBody from "../components/TableBody";
import TableFooter from "../components/TableFooter";

const UserTable = () => {
  const users = useLoaderData();
  const [sortedUsers, setSortedUsers] = useState(users.users);
  const [sortOrder, setSortOrder] = useState("asc");
  const [column, setColumn] = useState("id");

  // shorting functionality

  return (
    <div className="container mx-auto w-[90%] mt-5 max-h-[80vh]">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <caption className="caption-top text-gray-300 text-4xl py-2">
          All Users
        </caption>
        <TableHead
          column={column}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setColumn={setColumn}
          sortedUsers={sortedUsers}
          setSortedUsers={setSortedUsers}
        />
        <tbody className="overflow-y-auto w-full">
          {sortedUsers.map((user) => (
            <TableBody user={user} key={user.id} />
          ))}
        </tbody>
        <TableFooter />
      </table>
    </div>
  );
};

export default UserTable;
