import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Products, Login, Contact, Users, Private } from "./Pages/index.js";
import { fetchProducts, fetchUsers } from "./api/index.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Products />,
        loader: fetchProducts,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "users",
        element: <Private />,

        children: [{ path: "", element: <Users />, loader: fetchUsers }],
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
