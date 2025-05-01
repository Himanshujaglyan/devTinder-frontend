import { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([
    {
      sender: "Obi-Wan Kenobi",
      text: "You were the Chosen One!",
      time: "2 hours ago",
      seen: true,
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "You",
        text: input,
        time: "Just now",
        seen: false,
      },
    ]);
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto h-[80vh] border border-gray-600 flex flex-col rounded-lg shadow-md">
      <div className="border-b border-gray-600 p-4 text-xl font-semibold">
        Chat
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-700">{msg.sender}</div>
            <div className="text-xs text-gray-500">{msg.time}</div>
            <div className="bg-blue-100 text-gray-800 p-2 rounded-lg max-w-[70%]">
              {msg.text}
            </div>
            {msg.seen && (
              <div className="text-xs text-right text-gray-400">Seen</div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-600 flex items-center gap-2 bg-white">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-400 px-3 py-2 rounded-md focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
