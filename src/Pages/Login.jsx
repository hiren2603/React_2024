import React, { useState } from "react";
import bg from "../assets/bg.jpg";
import { MdOutlineLogin } from "react-icons/md";
import { Button, Input, InputError } from "../components";
import { LoginUser } from "../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleBlur = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    if (name === "username" && username.length < 3) {
      setErrors({ ...errors, username: "Username is too short!" });
    } else if (name === "password" && password.length < 5) {
      setErrors({ ...errors, password: "Password is too short!" });
    } else {
      setUsername();
      setErrors({ username: "", password: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const user = await LoginUser(username, password);
      localStorage.setItem("token", JSON.stringify(user.token));
      console.log(user.token);
      setUsername("");
      setPassword("");
    } else {
      return;
    }
  };
  return (
    <div className="mx-auto mt-20 h-[400px] w-[500px] rounded-lg flex flex-col justify-start items-center p-5 gap-5 bg-gradient-to-r from-slate-700 to-slate-950 shadow-lg shadow-black">
      <h1 className="text-5xl font-semibold bg-gradient-to-r from-pink-600 via-slate-700 to-indigo-400 bg-clip-text text-transparent pb-6">
        Login
      </h1>
      <div className="flex flex-col w-full gap-5">
        <Input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={handleBlur}
          errorText={errors.username}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onBlur={handleBlur}
          onChange={(e) => setPassword(e.target.value)}
          errorText={errors.password}
        />
      </div>
      <div className="w-full flex justify-center">
        <Button btnText="Login" onClick={handleSubmit}>
          <MdOutlineLogin className="h-[30px] text-2xl ml-1" />
        </Button>
      </div>
    </div>
  );
}

export default Login;
