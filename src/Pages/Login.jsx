import React, { useState } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { Button, Input } from "../components";
import { LoginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    if (name === "username" && value.length >= 3) {
      setErrors({ ...errors, username: "" });
    }
    if (name === "password" && value.length >= 5) {
      setErrors({ ...errors, password: "" });
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "username" && value.length < 4) {
      setErrors({ ...errors, username: "Username is too short!" });
      console.log(errors);
    } else if (name === "password" && value.length < 5) {
      setErrors({ ...errors, password: "Password is too short!" });
    } else {
      setErrors({ username: "", password: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { username, password } = user;
    if (username && password) {
      const user = await LoginUser(username, password);
      console.log(user);
      if (!user.message) {
        localStorage.setItem("token", JSON.stringify(user.token));
        setUser({ username: "", password: "" });
        setLoading(false);
        navigate("/users");
      } else {
        setLoading(false);
        setApiError(user.message);
      }
    } else {
      if (!username && !password) {
        setErrors({
          username: "Username is Required!",
          password: "Password is Required!",
        });
        setLoading(false);
      } else if (!username) {
        setErrors({ ...errors, username: "Username is Required!" });
        setLoading(false);
      } else {
        setErrors({ ...errors, password: "Password is Required!" });
        setLoading(false);
      }
      return;
    }
  };
  return (
    <div className="mx-auto mt-20 h-[400px] w-[500px] rounded-lg flex flex-col justify-start items-center p-5 gap-5 bg-gradient-to-r from-slate-700 to-slate-950 shadow-lg shadow-black">
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-pink-600 via-slate-700 to-indigo-400 bg-clip-text text-transparent pb-2">
        Login
      </h1>
      <p className="text-red-500 place-self-start animate-bounce">{apiError}</p>
      <div className="flex flex-col w-full gap-5">
        <Input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
          onBlur={handleBlur}
          errorText={errors.username}
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          errorText={errors.password}
        />
      </div>
      <div className="w-full flex justify-center">
        <Button btnText="Login" onClick={handleSubmit} loading={loading}>
          {loading ? (
            <ImSpinner9 className="animate-spin text-l ml-1" />
          ) : (
            <MdOutlineLogin className="text-2xl ml-1" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default Login;
