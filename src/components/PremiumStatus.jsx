import React from "react";

const PremiumStatus = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-3xl shadow-2xl max-w-md text-center border border-purple-300 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          🎉 You're a Premium Member!
        </h1>
        <p className="text-purple-700 text-lg mb-6">
          Enjoy your exclusive benefits including unlimited connections,
          priority access, and a verified badge.
        </p>
        <div className="text-purple-900 font-semibold bg-purple-200 rounded-xl px-4 py-2 inline-block shadow-md">
          Premium Status: <span className="text-green-600">Active</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumStatus;
