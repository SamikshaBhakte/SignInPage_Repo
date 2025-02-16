import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label className="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <label className="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter you email"
          />
          <label className="password">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter password"
          />
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an account ?</p>
        <Link to="/login" type="submit" class="btn btn-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
