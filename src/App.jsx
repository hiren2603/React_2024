import { useEffect, useState } from "react";
import { AuthProvider } from "./hooks/useAuth.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  fetchProducts,
  fetchUsers,
  getCurrentUser,
  getProductDetails,
} from "./api";
import {
  Login,
  Products,
  PrivateRoutes,
  Contact,
  Cart,
  UserTable,
  ProductDetails,
} from "./Pages";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" loader={fetchProducts} element={<Products />} />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
        loader={({ params }) => getProductDetails(params.id)}
      />
      <Route path="/login" element={<Login />} loader={getCurrentUser} />
      <Route element={<PrivateRoutes />} loader={getCurrentUser}>
        <Route path="users" element={<UserTable />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );

  // useEffect(() => {
  //   console.log(`token: ${token}`);
  //   setToken(localStorage.getItem("token"));
  // }, []);
  const login = async () => {
    const response = await LoginUser(username, password);
    const result = response.json();
    localStorage.setItem("token", JSON.stringify(result.token));
    setUser({ username: "", password: "" });
    setLoading(false);
    setAuth(true);
    return result;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };
  return (
    <AuthProvider
      value={{
        user,
        setUser,
        token,
        setToken,
        login,
        logout,
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
