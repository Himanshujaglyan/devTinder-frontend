import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addconnections } from "../utils/connectionSlice";
import ShimmerRequests from "../Shimmer/ShimmerRequests"; // same shimmer reuse
import NoConnection from "./NoConnection";
import { Bases_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const [loading, setLoading] = useState(true);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(Bases_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addconnections(res?.data?.data));
    } catch (err) {
      console.log("Error fetching connections:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (loading) return <ShimmerRequests />; // show shimmer while loading
  if (!connections || connections.length === 0)
    return <NoConnection/>

  return (
    <div className="text-center min-h-screen my-5">
      <h1 className="text-2xl bg-base-200">Connections</h1>
      {connections.map((connection) => {
        const {_id, firstName, lastName, profileImage, age, gender, about } = connection;
        return (
          <div
            key={_id}
            className="flex items-center justify-center gap-4 my-5"
          >
            {/* Profile Image */}
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-slate-300 ring-offset-base-100 ring-offset-2">
                <img src={profileImage} alt="Profile" />
              </div>
            </div>

            {/* Card Content */}
            <div className="card shadow-md w-96 bg-base-200 hover:bg-base-300 hover:shadow-xl transition-shadow duration-300">
              <div className="card-body text-start">
                <h2 className="card-title font-semibold text-lg capitalize">
                  {firstName + " " + lastName}
                </h2>
                <p>{age + ", " + gender}</p>
                <p className="text-sm text-gray-400 line-clamp-2">{about}</p>
                <div className="card-actions justify-end">
                  <Link to={`/chat/${_id}`}>
                  <button className="btn btn-primary btn-sm">Chat</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;