import React, { useState, useEffect } from 'react';
import './ChatbotPage.css';
import { useLocation,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ChatbotPage() {
  const { username } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const initialMessage = decodeURIComponent(new URLSearchParams(location.search).get('initialMessage')) || '';
  const [userInput, setUserInput] = useState(initialMessage);
  const [chatHistory, setChatHistory] = useState([]);

  // Welcome message to introduce the chatbot
  useEffect(() => {
    const welcomeMessage = "Welcome to the Chatbot. How can I assist you today?";
    setChatHistory([{ user: false, message: welcomeMessage }]);
  }, []);

  const handleChatbotNavigation = () => {
    navigate(`/user/${username}`);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Simulate a chatbot response (replace this with actual chatbot logic)
    const chatbotResponse = simulateChatbotResponse(userInput);

    // Add both the user's question and chatbot's response to chat history
    setChatHistory([
      ...chatHistory,
      { user: true, message: userInput },
      { user: false, message: chatbotResponse },
    ]);
    setUserInput('');
  };

  const simulateChatbotResponse = (userInput) => {
    // Replace this with your actual chatbot logic to generate responses based on user input.
    // For now, it's a simple .
    return "Chatbot response";
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Chatbot</h1>
      <button className="back-button" onClick={handleChatbotNavigation}>
        Back
      </button>
      <div className="chat-history">
        {chatHistory.map((item, index) => (
          <div key={index} className={`message ${item.user ? 'user' : 'bot'}`}>
            {item.message}
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatbotPage;
