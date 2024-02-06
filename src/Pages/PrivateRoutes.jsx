import React, { useEffect } from "react";
import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { api } from "../conf";

const PrivateRoutes = () => {
  const auth = useLoaderData();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
