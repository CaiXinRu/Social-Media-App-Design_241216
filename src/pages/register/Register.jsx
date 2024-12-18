import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>CXR School</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            necessitatibus.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="text" placeholder="Name"></input>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
