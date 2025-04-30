import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addrequests ,removerequest } from "../utils/requestsSlice";
import ShimmerRequests from "../Shimmer/ShimmerRequests";
import RequestsNotFound from "./RequestNotFound";
import { Bases_URL } from "../utils/constants";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const [loading, setLoading] = useState(true); // loading state

  const getRequests = async () => {
    try {
      const res = await axios.get(Bases_URL + "/user/request", {
        withCredentials: true,
      });
      dispatch(addrequests(res?.data?.data));
      // console.log(res?.data?.data)
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false); // loading done
    }
  };

  const reviewRequest = async (status, _id) => {
    const res = await axios.post(
      Bases_URL + "/request/review/" + status + "/" + _id,
      {},
      { withCredentials: true }
    );
    dispatch(removerequest(_id));
  };
  useEffect(() => {
    getRequests();
  }, []);

  if (loading) return <ShimmerRequests />;
  if (!requests || requests.length === 0)
    return <RequestsNotFound/>;

  return (
    <div className="text-center min-h-screen my-5 ">
      <h1 className="text-2xl bg-base-200">Connection Requests</h1>
      {requests.map((request) => {
        const { _id, fromuserId } = request;
        const { firstName, lastName, profileImage, age, gender, about } =
          fromuserId;

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
                  <button className="btn btn-secondary btn-sm" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
                  <button className="btn btn-primary btn-sm" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
                </div>
              </div>
            </div>
          </div>
         
        );
      })}
    </div>
  
  
    );
};

export default Requests;
