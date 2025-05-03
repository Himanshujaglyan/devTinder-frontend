import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { Bases_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef(null);
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const fetchChatMessages = async () => {
    const chat = await axios.get(Bases_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        text,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId || !targetUserId) return;

    const socket = createSocketConnection();
    socketRef.current = socket;

    const roomId = [userId, targetUserId].sort().join("_");

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
      roomId,
    });

    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((prev) => [...prev, { firstName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    socketRef.current?.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: newMessage,
    });

    setNewMessage("");
  };

  return (
    <div className="w-full max-w-3xl mb-14 mx-auto bg-[#1a1a1a] text-white border border-gray-700 rounded-lg mt-6 h-[75vh] flex flex-col shadow-lg">
      <h1 className="text-xl font-semibold p-5 border-b border-gray-700">Chat</h1>

      <div className="flex-1 overflow-y-scroll px-6 py-4 space-y-4 custom-scrollbar">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              user.firstName === msg.firstName ? "items-end" : "items-start"
            }`}
          >
            <div className="text-xs text-gray-400 mb-1">
              {msg.firstName} <span className="ml-2">now</span>
            </div>
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                user.firstName === msg.firstName
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {msg.text}
            </div>
            <div className="text-[10px] text-gray-500 mt-1">Seen</div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center gap-3 bg-[#111]">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-[#222] text-white border border-gray-600 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
