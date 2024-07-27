import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Field from "../UI/Form/Input/Field";
import Submit from "../UI/Form/Submit/Submit";
import LoginFiled from "../UI/Alert/LoginFailed";
import { useDispatch, useSelector } from "react-redux";
import { setFiledLogin } from "../Redux/AlertReducer";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("Email"),
      password: formData.get("Password"),
    };
    console.log(data);
    axios
      .post(`${window.host}/loginRestaurant`, data)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        console.log(response.data);
        navigate("/dashboard");
        dispatch(setFiledLogin(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setFiledLogin(true));
      });
  };

  return (
    <div
      class="ms-auth-container"
      className="flex h-screen bg-cover "
      style={{ backgroundImage: "url('http://localhost:3000/coming.jpg')" }}
    >
      <LoginFiled />
      <div class="ms-auth-col" className="flex-1">
        <div
          class="ms-auth-form"
          className="flex py-12 px-4  h-screen justify-center items-center"
        >
          <form
            class="needs-validation lg:w-1/2"
            novalidate=""
  
            onSubmit={handleSubmit}
          >
            <h3 className="text-[30px] font-semibold mb-2">Login to Account</h3>
            <p className="mb-[15px]">Please enter your email and password</p>
            <div class="mb-3" className="mb-4  text-left">
              <div class="input-group" className="w-full flex relative">
                <Field
                  label="Email"
                  placeholder="Email"
                  name="Email"
                  type="email"
                  value=""
                />
             
              </div>
            </div>
            <div class="mb-3" className="mb-4 text-left">
              <div class="input-group" className="w-full flex relative">
                <Field
                  label="Password"
                  type="password"
                  placeholder="Password"
                  name="Password"
                  value=""
                />
                {/* <div class="invalid-feedback">
                  Please provide a valid email.
                </div> */}
              </div>
            </div>
            <Submit value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
