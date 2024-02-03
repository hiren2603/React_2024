import { useState } from "react";
import { AuthProvider } from "./hooks/useAuth.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { fetchProducts, fetchUsers, getCurrentUser } from "./api";
import { Login, Users, Products, PrivateRoutes, Contact, Cart } from "./Pages";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" loader={fetchProducts} element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />} loader={getCurrentUser}>
        <Route path="users" loader={fetchUsers} element={<Users />} />
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
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [auth, setAuth] = useState({});
  const login = async () => {
    const response = await LoginUser(username, password);
    const result = response.json();
    localStorage.setItem("token", JSON.stringify(result.token));
    setUser({ username: "", password: "" });
    setLoading(false);
    return result;
  };

  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <AuthProvider value={{ user, setUser, auth, login, logout, loading }}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
