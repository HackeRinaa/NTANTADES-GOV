import { useState } from "react";
import NavBar from "../../components/navBar/NavBar"; // Adjust the import path as necessary
import { ChatList, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import "./chat.css"; // Custom styles

const Chat = () => {
  // Dummy data for chat messages
  const dummyMessages = [
    {
      position: "left",
      type: "text",
      text: "Hello! How are you?",
      date: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    },
    {
      position: "right",
      type: "text",
      text: "I am good, thank you! How about you?",
      date: new Date(Date.now() - 1000 * 60 * 4), // 4 minutes ago
    },
    {
      position: "left",
      type: "text",
      text: "I am doing well, just working on a project.",
      date: new Date(Date.now() - 1000 * 60 * 3), // 3 minutes ago
    },
    {
      position: "right",
      type: "text",
      text: "That sounds interesting! What project?",
      date: new Date(Date.now() - 1000 * 60 * 2), // 2 minutes ago
    },
    {
      position: "left",
      type: "text",
      text: "It’s a chat application using React.",
      date: new Date(Date.now() - 1000 * 60), // 1 minute ago
    },
  ];

  const [messages, setMessages] = useState(dummyMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      position: "right", // 'left' for incoming messages, 'right' for outgoing
      type: "text",
      text: inputValue,
      date: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="ChatPage">
      <NavBar />
      <div className="chat-container">
        <h2>Chat</h2>
        <div className="chat-list">
          <ChatList
            className="chat-list"
            dataSource={messages.map((msg, index) => ({
              ...msg,
              id: index,
            }))}
          />
        </div>
        <div className="input-container">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;