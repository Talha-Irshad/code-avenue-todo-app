import { Button, Input } from "antd";
import React, { useCallback, useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";
import { useNavigate } from "react-router-dom";

const user = {
  email: "user@gmail.com",
  password: "12345",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleOnClick = () => {
    setError(false);
    setTimeout(() => {
      if (email == user.email && password == user.password) {
        setError(false);
        navigate("/todos", { replace: true });
      } else {
        setError(true);
      }
    }, 300);
  };

  return (
    <div className="page">
      <h1>Todo App</h1>
      <div className="login-container">
        <h3>Login</h3>
        <Input
          className="input"
          aria-label="Email"
          placeholder="Enter Email"
          prefix={<UserOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          className="input"
          aria-label="Password"
          placeholder="Enter Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      {error && <p className="error">Incorrect email or password</p>}
      <Button onClick={handleOnClick} title="Login" type="primary">
        Sign In
      </Button>
      <div className="about">
        <p>Developed by: Talha Irshad</p>
        <p>React Native, MERN stack Developer</p>
        <p>Technology used: React, Vite</p>
      </div>
    </div>
  );
}

export default Login;
