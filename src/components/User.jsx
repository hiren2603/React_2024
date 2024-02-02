import React from "react";

const User = ({ user }) => {
  const dob = user.birthDate;
  const date = new Date(dob)
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .replace(/(\d+)(th|st|nd|rd)/, "$1");
  return (
    <>
      <div
        key={user.id}
        className="h-[320px] w-[300px] flex flex-col justify-start items-center bg-gray-600 rounded-lg px-2 py-2 m-2 text-white shadow-lg shadow-black"
      >
        <img
          src={user.image}
          alt={user.name}
          className="h-[100px] w-[100px] rounded-full bg-gray-300 p-2 mt-5"
        />
        <h2 className="text-2xl font-semibold pt-5">
          {user.firstName} {user.lastName}
        </h2>
        <div className="flex flex-col place-self-start px-2 my-2">
          <p className="text-pretty">Gender: {user.gender}</p>
          <p className="text-pretty">DOB: {date}</p>
          <p className="text-pretty">Email: {user.email}</p>
          <p className="text-wrap">Company: {user.company.name}</p>
        </div>
      </div>
    </>
  );
};

export default User;
