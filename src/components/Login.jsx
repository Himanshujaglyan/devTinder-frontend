import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Bases_URL } from "../utils/constants";
const Login = () => {
  const [error, seterror] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailId, setemail] = useState();
  const [password, setpassword] = useState();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [notification, setNotification] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        Bases_URL+"/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
        return navigate("/");
      }, 400);
    } catch (err) {
      seterror(err?.response?.data || "Something went wrong!");
      console.log(err);
    }
  };
  const handleSignUp = async () => {
    const res = await axios.post(
      Bases_URL + "/signup",
      { firstName, lastName, emailId, password },
      { withCredentials: true }
    );
    dispatch(addUser(res?.data?.data))
    navigate("/profile")
  };
  return (
    <div className="flex justify-center my-44 overscroll-y-none ">
      {notification && (
        <div className="toast z-50 toast-center toast-top animate-ping">
          <div className="alert alert-success shadow-lg rounded-xl border-l-4 border-green-500 bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-800 font-semibold ml-2">
              Login Successfull
            </span>
          </div>
        </div>
      )}

      <div className="card bg-base-300 -mt-32 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div className="p-4">
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs mb-5"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs mb-5"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                  />
                </label>
              </>
            )}

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs mb-5"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email Id"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
              />
              <p className="text-red-500">{error}</p>
            </label>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p className="text-center text-sm mt-5 text-gray-300">
          {isLoginForm ? "New here?" : "Already a user?"}{" "}
          <span
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLoginForm((prev) => !prev)}
          >
            {isLoginForm ? "Create an Account" : "Login Now"}
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
