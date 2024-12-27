import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data.message);
    }
  };

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
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            ></input>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            ></input>
            {err && <span>{err}</span>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
