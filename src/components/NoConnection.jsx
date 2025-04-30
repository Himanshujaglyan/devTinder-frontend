import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoConnection = () => {
    const navigate = useNavigate()
    const feedPage= ()=>{
        navigate("/")
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-3xl shadow-lg p-8 text-center max-w-md w-full">
        {/* New Connections Icon - symbolic of linking */}
        <svg
          className="w-24 h-24 text-indigo-400 mx-auto mb-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 13a5 5 0 007.54 4.21l1.42-1.42a5 5 0 000-7.07l-1.42-1.42M14 11a5 5 0 00-7.54-4.21l-1.42 1.42a5 5 0 000 7.07l1.42 1.42"
          />
        </svg>

        {/* Text */}
        <h2 className="text-2xl font-bold text-white mb-2">
          No Connections Yet
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Looks like you haven’t connected with anyone. Start exploring and make new friends.
        </p>

        {/* Button */}
        <button className="px-6 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition" onClick={feedPage}>
          Find People
        </button>
      </div>
    </div>
  );
};

export default NoConnection;
