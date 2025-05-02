import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef(null); 
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
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

    setMessages((prev) => [...prev, { firstName: user.firstName, text: newMessage }]);
    setNewMessage(""); // Clear input after sending
  };

  return (
    <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat</h1>

      <div className="flex-1 overflow-y-scroll p-5">
        {messages.map((msg, index) => (
          <div key={index} className="chat chat-start">
            <div className="chat-header">
              {msg.firstName}
              <time className="text-xs opacity-50 ml-2">now</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>

      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          className="flex-1 border border-gray-500 text-white rounded p-2"
          type="text"
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
