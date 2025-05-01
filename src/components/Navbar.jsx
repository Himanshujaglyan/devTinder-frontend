import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { Bases_URL } from "../utils/constants";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await axios.post(
        Bases_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-semibold text-white tracking-wide flex items-center gap-3 hover:scale-105 transition-transform duration-200"
      >
        <img
          src="https://i.pinimg.com/736x/a2/2a/a6/a22aa68349f0b8892efc65682328e106.jpg"
          alt="logo"
          className="w-10 h-10 rounded-full object-cover border-2 border-pink-500 shadow-sm"
        />
        <span className="text-gray-100 hover:text-pink-400 transition-colors duration-200">
          DevTinder
        </span>
      </Link>

      {user && (
        <div className="flex items-center gap-4 relative group">
          {/* Welcome Text */}
          <div className="text-sm md:text-base font-medium">
            <span className="text-gray-400">Welcome,</span>{" "}
            <span className="text-white font-semibold drop-shadow">
              {user.firstName}
            </span>
          </div>

          {/* Avatar */}
          <div className="relative">
            <div
              tabIndex={0}
              className="btn btn-circle btn-ghost avatar ring-2 ring-pink-500 hover:ring-cyan-400 transition-all duration-300"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.profileImage ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  } // default user icon
                  alt="Profile"
                />
              </div>
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute right-0 mt-3 z-[1] w-52 rounded-lg bg-gray-800 text-white shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
            >
              <li>
                <Link
                  to="/profile"
                  className="justify-between hover:text-pink-400"
                >
                  Profile{" "}
                  <span className="badge bg-pink-600 text-white">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections" className="hover:text-cyan-400">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" className="hover:text-cyan-400">
                  Requests
                </Link>
                <Link to="/premium" className="hover:text-cyan-400">
                  Premium👑
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:text-red-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
