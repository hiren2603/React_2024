import React from "react";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";

const PrivateRoutes = () => {
  const status = useLoaderData();
  console.log(status);

  return status == 200 ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
