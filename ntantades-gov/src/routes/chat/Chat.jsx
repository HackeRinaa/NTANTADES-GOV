import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import NavBar from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  const dummyCurrentUser = { id: 1, username: "John Doe", avatar: "./goneas.png" };
  const dummyUser = { id: 2, username: "Jane Smith", avatar: "./goneas.png" };
  

  const [chat, setChat] = useState({
    messages: [
      { senderId: 1, text: "Hello, how are you?", createdAt: new Date() },
      { senderId: 2, text: "I'm good, thanks! How about you?", createdAt: new Date() },
    ],
  });

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const currentUser = dummyCurrentUser;
  const user = dummyUser;

  const isCurrentUserBlocked = false;
  const isReceiverBlocked = false;

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = () => {
    if (!text.trim()) return;

    const newMessage = {
      senderId: currentUser.id,
      text,
      createdAt: new Date(),
      ...(img.url && { img: img.url }),
    };

    setChat((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    setImg({ file: null, url: "" });
    setText("");
  };

  return (
    <div className="chat-page">
      <NavBar />
      <div className="backbtn">
          <button className="btn" onClick={() => navigate('/profile-ntanta')}>Το Προφίλ Μου</button>
      </div>
      <div className="chat">
        <div className="top">
          <div className="user">
            <img src={user?.avatar || "./avatar.png"} alt="User Avatar" />
            <div className="texts">
              <span>{user?.username}</span>
              <p>Active now</p>
            </div>
          </div>
          <div className="icons">
            <img src="/phone.png" alt="Call" />
            <img src="/video.png" alt="Video" />
            <img src="/info.png" alt="Info" />
          </div>
        </div>
        <div className="center">
          {chat?.messages?.map((message, index) => (
            <div
              className={
                message.senderId === currentUser?.id ? "message own" : "message"
              }
              key={index}
            >
              <div className="texts">
                {message.img && <img src={message.img} alt="Message Attachment" />}
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          {img.url && (
            <div className="message own">
              <div className="texts">
                <img src={img.url} alt="Image Preview" />
              </div>
            </div>
          )}
          <div ref={endRef}></div>
        </div>
        <div className="bottom">
          <div className="icons">
            <label htmlFor="file">
              <img src="./img.png" alt="Attach File" />
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleImg}
            />
            <img src="/camera.png" alt="Camera" />
            <img src="/mic.png" alt="Microphone" />
          </div>
          <input
            type="text"
            placeholder={
              isCurrentUserBlocked || isReceiverBlocked
                ? "You cannot send a message"
                : "Type a message..."
            }
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isCurrentUserBlocked || isReceiverBlocked}
          />
          <div className="emoji">
            <img
              src="/emoji.png"
              alt="Emoji Picker"
              onClick={() => setOpen((prev) => !prev)}
            />
            <div className={`picker ${open ? "open" : ""}`}>
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button
            className="sendButton"
            onClick={handleSend}
            disabled={isCurrentUserBlocked || isReceiverBlocked}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
