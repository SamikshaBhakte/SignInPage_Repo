import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginUser">
      <h3>Login</h3>
      <form className="loginUserForm">
        <div className="loginInputGroup">
          <label className="name">Email:</label>
          <input
            type="email"
            id="loginEmail"
            autoComplete="off"
            placeholder="Enter your email"
          />
          <label className="password">Password</label>
          <input
            type="password"
            id="loginPassword"
            autoComplete="off"
            placeholder="Enter your password"
          />
          <button type="submit" class="btn btn-success">
            Login
          </button>
        </div>
      </form>
      <div className="forgetPassword">
        <p>Forgot Email id or Password ?</p>
        <Link to="/forgotPassword" type="submit" class="btn btn-link">
          click here
        </Link>
      </div>
    </div>
  );
};

export default Login;
