import React, { useState } from "react";
import Login from "../component/Login";
import "../page/Landing.css";

const Landing = () => {
  const [errormsgLogin, setErrorMsgLogin] = useState("");
  const [successmsgLogin, setSuccessmsgLogin] = useState("");
  const [checkName, setCheckName] = useState("");
  const handelLoginSubmit = (data) => {
    // console.log(data)
    const password = data.password;
    const userName = data.userId;

    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const numbers = /\d/;
    let count = 0;

    if (userName === "") {
      count = +1;
      setCheckName("please type user name");
    } else if (password === "") {
      count = +1;
      setErrorMsgLogin("please type password");
    } else if (password.length <= 7) {
      count = +1;
      setErrorMsgLogin("input password length should be more then 7 ");
    } else if (password === password.toLowerCase()) {
      count = +1;
      setErrorMsgLogin(
        "input password should have atleast one upercase letter"
      );
    } else if (password === password.toUpperCase()) {
      count = +1;
      setErrorMsgLogin(
        "input password should have atleast one lowercase letter"
      );
    } else if (!format.test(password)) {
      count = +1;
      setErrorMsgLogin(
        "input password should have atleast one special charecter"
      );
    } else if (!numbers.test(password)) {
      count = +1;
      setErrorMsgLogin("input password should have atleast one number");
    }
    // console.log(count)

    if (count === 0) {
      setSuccessmsgLogin("Login Successfull with all validation");
      setCheckName("");
      setErrorMsgLogin("");
    }
  };

  return (
    <>
      <img
        className="card-img"
        src="https://wallpapercave.com/wp/wp4016031.jpg"
        alt="Home page background"
        height={"745px"}
      />

      <div className="card-img-overlay">
        <div className="container">
          <div className=" d-flex justify-content-center align-items-center">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              id="button"
            >
              Get Started
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header " id="canhead">
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body " id="canvas">
                <Login
                  onLoginSubmit={handelLoginSubmit}
                  errormsgLogin={errormsgLogin}
                  successmsgLogin={successmsgLogin}
                  checkName={checkName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
