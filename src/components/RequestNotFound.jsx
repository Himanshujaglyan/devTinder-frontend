import React from 'react';
import { Link } from 'react-router-dom';

const RequestsNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-3xl shadow-lg p-8 text-center max-w-md w-full">
        {/* New Request Icon - Envelope with No Content */}
        <svg
          className="w-24 h-24 text-indigo-400 mx-auto mb-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-.76-1.56M3.76 5.44A2 2 0 003 7v10a2 2 0 002 2z"
          />
        </svg>

        {/* Text */}
        <h2 className="text-2xl font-bold text-white mb-2">
          No Requests Found
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          You currently have no incoming requests. When someone sends one, it’ll show up here.
        </p>

        <Link to="/" className="px-6 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RequestsNotFound;
