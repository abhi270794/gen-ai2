import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './userprofile.css'; // Add your CSS file
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const storedUsername = sessionStorage.getItem('username') || '';

  const [skillsAndInterests, setSkillsAndInterests] = useState(
    JSON.parse(sessionStorage.getItem('skillsAndInterests')) || []
  );
  const [learningGoals, setLearningGoals] = useState(
    sessionStorage.getItem('learningGoals') || ''
  );

  const handleSkillInterestChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSkillsAndInterests([...skillsAndInterests, value]);
    } else {
      setSkillsAndInterests(skillsAndInterests.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    sessionStorage.setItem('skillsAndInterests', JSON.stringify(skillsAndInterests));
    sessionStorage.setItem('learningGoals', learningGoals);
  }, [skillsAndInterests, learningGoals]);

  const handleChatbotNavigation = () => {
    navigate('/chatbot');
  };
  
  const handleNavigation = () => {
    // Pass learningGoals to the Chatbot page
    navigate(`/chatbot?initialMessage=${encodeURIComponent(learningGoals)}`);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="user-profile-container">
      <h1>Welcome, {storedUsername || username}!</h1>

      <div className="skills-interest-section">
        <h2>Skills and Interests</h2>
        <div className="skills-interest-options">
          {['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Web Development', 'Data Science', 'Design', 'AI'].map(
            (item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  value={item}
                  checked={skillsAndInterests.includes(item)}
                  onChange={handleSkillInterestChange}
                />
                {item}
              </label>
            )
          )}
        </div>
      </div>

      <div className="learning-goals-section">
        <h2>Learning Goals</h2>
        <textarea
          id="learningGoals"
          value={learningGoals}
          onChange={(e) => setLearningGoals(e.target.value)}
        />
      </div>

      <button onClick={handleChatbotNavigation}>Go to Chatbot</button>
      <button onClick={handleNavigation}>Generate Learning Path</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
