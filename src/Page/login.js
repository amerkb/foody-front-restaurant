import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Field from "../UI/Form/Input/Field";
import Submit from "../UI/Form/Submit/Submit";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${window.host}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setToastOpen(true);
    }
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };
  return (
    //   <div className="flex">
    //     <div className="flex-1 h-screen relative">

    //  {toastOpen && (
    //         <Fade in={toastOpen}>
    //           <Paper className="fixed top-10 right-12 z-10">
    //             <LoginFiled
    //               onConfirm={handleToastClose}
    //               message="Login failed"
    //             />
    //           </Paper>
    //         </Fade>)}
    //       <h2 className="text-[40px] text-primary absolute top-[15%] left-4 font-bold">
    //         Welcome Back
    //       </h2>
    //       <form className="w-full absolute top-[27%] left-4" onSubmit={handleSubmit}>
    //         <label className="block">
    //           <span className="ml-2 block text-sm font-[#4FD1C5]">
    //             Email
    //           </span>
    //           <input
    //             type="email"
    //             name="email"
    //             value={email}
    //             onChange={handleEmailChange}
    //             className="mt-1 mb-6 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-3/4 sm:text-sm focus:ring-1"
    //             autoComplete="off"
    //             placeholder="Enter Email"
    //             autoFocus
    //             required
    //           />
    //         </label>
    //         <label className="block">
    //           <span className="ml-2 block text-sm font-[#4FD1C5]">
    //             Password
    //           </span>
    //           <div className="relative">
    //             <input
    //               type={passwordVisible? 'text' : 'password'}
    //               name="password"
    //               value={password}
    //               onChange={handlePasswordChange}
    //               className="mt-1 mb-12 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-3/4 sm:text-sm focus:ring-1"
    //               autoComplete="off"
    //               placeholder="Enter Password"
    //               required
    //             />
    //             <button
    //               type="button"
    //               className="absolute right-[26%] top-[50%] -translate-y-1/2 text-sm text-gray-500 focus:outline-none"
    //               onClick={togglePasswordVisibility}
    //             >
    //               {passwordVisible? <FaEyeSlash /> : <FaEye />}
    //             </button>
    //           </div>
    //         </label>
    //         <input
    //           type="submit"
    //           value="Login"
    //           className="bg-primary text-white font-bold py-2 px-10 rounded"
    //         />
    //       </form>
    //     </div>
    //     <div className="flex-1 flex justify-center overflow-hidden items-center h-screen relative bg-primary">
    //       <h1 className="absolute top-[40%] whitespace-nowrap  flex justify-center items-center  font-bold font-serif z-10  text-white -translate-y-1/2 text-[70px]">
    //         <GiElectric className="inline-block w-16 h-16  mr-3 bg-white text-primary rounded-full" />
    //         NEVERIA
    //       </h1>
    //       <img src="http://localhost:3000/wave.png" className='fixed -bottom-10 -right-16' />
    //     </div>
    //   </div>
    <div class="ms-auth-container" className="flex h-screen">
      <div class="ms-auth-col">
        <div class="ms-auth-bg"></div>
      </div>
      <div class="ms-auth-col" className="flex-1">
        <div class="ms-auth-form" className="flex py-12 px-4  h-screen justify-center items-center">
          <form class="needs-validation" novalidate="" className="w-[40%]">
            <h3 className="text-[30px] font-semibold mb-2">Login to Account</h3>
            <p className="mb-[15px]">
              Please enter your email and password to continue
            </p>
            <div class="mb-3" className="mb-4 text-left">
              <div class="input-group" className="w-full flex relative">
                <Field
                  label="Email"
                  placeholder="Email"
                  name="Email"
                  value=""
                />
                {/* <div class="invalid-feedback">
                  Please provide a valid email.
                </div> */}
              </div>
            </div>
            <div class="mb-3" className="mb-4 text-left">
              <div class="input-group" className="w-full flex relative">
                <Field
                  label="Password"
                  placeholder="Password"
                  name="Password"
                  value=""
                />
                {/* <div class="invalid-feedback">
                  Please provide a valid email.
                </div> */}
              </div>
            </div>
            <Submit />

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
