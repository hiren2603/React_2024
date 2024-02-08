import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { auth, setAuth } = useAuth();
  const isAuth = useLoaderData();
  // setAuth(isAuth);
  if (!isAuth) {
    localStorage.removeItem("token");
    console.log("Token Expired!");
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
