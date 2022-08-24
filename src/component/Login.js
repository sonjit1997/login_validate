import React, { useState } from "react";
import "../component/Login.css";

const Login = (props) => {
  const { onLoginSubmit, errormsgLogin, successmsgLogin, checkName } = props;
  const [userId, setUseId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    const data = { userId, password };
    onLoginSubmit(data);
    e.preventDefault();
  };
  return (
    <div className="container " id="main">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="white"
        class="bi bi-person-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>

      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className="input-group  m-2"
            placeholder="Enter your user name"
            id="userId"
            value={userId}
            onChange={(e) => {
              setUseId(e.target.value);
            }}
          ></input>
          <h6 className="text text-danger">{checkName}</h6>
        </div>
        <div>
          <input
            type="text"
            className="input-group  m-2"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <h6 className="text text-danger">{errormsgLogin} </h6>
        </div>
        <div className="d-flex" id="top">
          <button
            type="submit"
            className="btn  justify-content-center "
            id="loginbtn"
          >
            Login
          </button>

          <button className="btn  justify-content-center " id="signupbtn">
            Signup
          </button>
        </div>
      </form>
      <h6 className="text text-success fw-bold mt-2">{successmsgLogin}</h6>
    </div>
  );
};

export default Login;
