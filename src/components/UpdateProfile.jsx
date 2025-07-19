import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Bases_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom"; // added for navigation
import Feed from "./Feed";

const UpdateProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [profileImage, setProfileImage] = useState(user.profileImage);
  const [gender, setGender] = useState(user.gender || "male");
  const [age, setAge] = useState(user.age || "0");
  const [about, setAbout] = useState(user.about);
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // initialize navigate

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        Bases_URL + "/profile/edit",
        { firstName, lastName, profileImage, gender, age, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data));
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
        navigate("/"); // redirect after 3 seconds
      }, 3000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center gap-10 items-start min-h-screen p-3 bg-base-100">
      {notification && (
        <div className="toast z-50 toast-top toast-center animate-none">
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
              Profile saved successfully!
            </span>
          </div>
        </div>
      )}

      {/* Edit Profile */}
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <div className="p-4">
            <label className="form-control w-full ">
              <span className="label-text  mb-1 text-gray-400">First Name</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input w-full bg-base-100 focus:outline-none focus:ring-0 mb-3"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-1 text-gray-400">Last Name</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input w-full bg-base-100 focus:outline-none focus:ring-0 mb-3"
              />
            </label>

            <label className="form-control w-full ">
              <span className="label-text mb-1 text-gray-400">
                Profile Image
              </span>
              <input
                type="text"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                className="input w-full bg-base-100 focus:outline-none focus:ring-0 mb-3"
              />
            </label>

            <label className="form-control w-full ">
              <span className="label-text mb-1 text-gray-400">Age</span>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input w-full bg-base-100 focus:outline-none focus:ring-0 mb-3"
              />
            </label>

            <label className="form-control w-full ">
              <span className="text-base-content/60 mb-1 text-gray-400">
                Gender
              </span>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="select w-full bg-base-100 focus:outline-none focus:ring-0 mb-4"
              >
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </label>

            <label className="form-control w-full ">
              <span className="label-text mb-1 text-gray-400">About</span>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea w-full bg-base-100 focus:outline-none focus:ring-0 mb-3 "
                rows="1"
              />
            </label>

            <div className="card-actions justify-center mt-2">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile view */}
      <div className="card bg-base-200 w-96 shadow-xl">
        <h2 className="card-title justify-center py-5">View Profile</h2>
        <figure className="w-full h-80 overflow-hidden rounded-t">
          <img
            className="w-full h-full object-cover"
            src={
              profileImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title break-words">
            {firstName + " " + lastName}
          </h2>
          <p>{age + ", " + gender}</p>
          <p className="break-words">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
