import React from "react";
import { useLoaderData } from "react-router-dom";
import { User } from "../components";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="container mx-auto w-[90%] flex flex-wrap h-full justify-center gap-8 mt-5">
      {users.users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
