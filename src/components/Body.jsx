import React, { useEffect } from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import { Bases_URL } from '../utils/constants'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((store) => store.user)

  const fetchUser = async () => {
    // Check if userdata is null, undefined, or empty
    if (userdata && Object.keys(userdata).length > 0) return; 

    try {
      const res = await axios.get(Bases_URL + "/profile", { withCredentials: true });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response && err.response.status === 401) { // Check for 401 error
        navigate("/login");
      } else {
        console.log(err); // Log any other errors
      }
    }
  }

  useEffect(() => {
    fetchUser();
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body;
