import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import SkillsPage from './components/SkillsPage';
import ChatbotPage from './components/ChatbotPage';
import RegistrationPage from './components/RegistrationPage';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<RegistrationPage/>} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
