import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { removefeed } from "../utils/feedSlice";
import { Bases_URL } from "../utils/constants";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        Bases_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removefeed(_id));
    } catch (err) {
      console.log(err.message);
    }
  };

  const { _id, firstName, gender, profileImage, age, lastName, about } = user;
  return (
    <div className="flex justify-center -mt-10 items-center min-h-screen">
      <div className="card bg-base-200  w-96 shadow-sm">
        <figure className="w-100 h-80 overflow-hidden rounded">
          <img
            className="w-full h-full object-cover"
            src={profileImage}
            alt="Profile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age + ", " + gender}</p>
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-secondary"
              onClick={() => handleRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
