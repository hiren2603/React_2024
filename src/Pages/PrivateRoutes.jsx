import { Navigate, Outlet, useLoaderData } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = useLoaderData();
  console.log(auth);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
