import React, { useEffect, useState } from "react";
import { Bases_URL } from "../utils/constants";
import axios from "axios";
import PremiumStatus from "./PremiumStatus";

const Premium = () => {
  const [IsPremium, setIsPremium] = useState(false);
  useEffect(() => {
    verifyPremiumUser();
  }, []);
  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(Bases_URL + "/premium/verify", {
        withCredentials: true,
      });
      if (res.data) {
        setIsPremium(true);
      }
    } catch (err) {
      console.log(err?.response?.data)
    }
  };
  const handleBuyClick = async (type) => {
    try {
      const order = await axios.post(
        Bases_URL + "/payment/create",
        {
          membershipType: type,
        },
        { withCredentials: true }
      );

      const { amount, currency, notes, orderId } = order.data;

      const options = {
        key: "rzp_test_D7fhBXqa6gAN7Q",
        amount,
        currency,
        name: "Dev Tinder",
        description: "Connect to other device",
        order_id: orderId,
        prefill: {
          name: notes.firstName + " " + notes.lastName,
          // email: notes.emailId,
          contact: "9999999999",
        },
        theme: {
          color: "#121212",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      console.log("Full error:", error?.response?.data || error.message);
      alert("Something went wrong while creating payment.");
    }
  };

  return IsPremium ? (
   <PremiumStatus/>
  ) : (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-24 mb-48 px-4">
      {/* Silver Membership */}
      <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-6 rounded-2xl shadow-2xl w-full md:w-1/3 text-center border border-gray-300 backdrop-blur-sm">
        <h1 className="font-bold text-2xl text-gray-800 mb-4">
          Silver Membership
        </h1>
        <ul className="mb-6 text-left text-gray-700 list-disc list-inside">
          <li>Chat with other people</li>
          <li>100 connection requests per day</li>
          <li>Blue Tick</li>
          <li>Valid for 3 months</li>
        </ul>
        <button
          className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:from-gray-600 hover:to-gray-800 transition duration-300"
          onClick={() => handleBuyClick("Silver")}
        >
          Buy Silver
        </button>
      </div>

      {/* Divider */}
      <div className="hidden md:block text-xl font-semibold text-gray-600">
        OR
      </div>

      {/* Gold Membership */}
      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-2xl shadow-2xl w-full md:w-1/3 text-center border border-yellow-300 backdrop-blur-sm">
        <h1 className="font-bold text-2xl text-yellow-800 mb-4">
          Gold Membership
        </h1>
        <ul className="mb-6 text-left text-yellow-700 list-disc list-inside">
          <li>Chat with other people</li>
          <li>200 connection requests per day</li>
          <li>Golden Tick</li>
          <li>Valid for 6 months</li>
        </ul>
        <button
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
          onClick={() => handleBuyClick("Gold")}
        >
          Buy Gold
        </button>
      </div>
    </div>
  );
};

export default Premium;
