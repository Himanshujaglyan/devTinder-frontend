import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const PremiumStatus = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [width, height] = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000); // show for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 relative overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl max-w-md text-center border border-gray-700 backdrop-blur-md z-10">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4 animate-bounce">
          ⭐ Premium User
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          You have unlocked all exclusive features! Enjoy priority access,
          unlimited connections, and a verified badge.
        </p>
        <div className="text-green-400 font-semibold bg-gray-700 rounded-xl px-4 py-2 inline-block shadow-inner">
          Status: Active
        </div>
      </div>
    </div>
  );
};

export default PremiumStatus;
