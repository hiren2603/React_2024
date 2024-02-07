import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { auth, setAuth } = useAuth();
  const isAuth = useLoaderData();
  setAuth(isAuth);
  console.log(auth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
