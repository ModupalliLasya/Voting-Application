import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './voting.scss';

const Voting = () => {
  const [votes, setVotes] = useState({
    OOPS: 0,
    Python: 0,
    Java: 0,
    Javascript: 0,
    ReactJs: 0,
    Swift: 0
  });

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showresult, setShowresult] = useState(false);

  const handleVote = (language) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [language]: prevVotes[language] + 1
    }));
    setSelectedLanguage(language);
  };

  const handleSubmit = () => {
    const selectedLanguageSet = new Set();
    for (const language in votes) {
      if (votes[language] > 0) {
        selectedLanguageSet.add(language);
      }
    }
    setShowresult(true);
    setSelectedLanguage(Array.from(selectedLanguageSet));
  }

  return (
    <div className='voting-container'>
      {!showresult ? (
        <>
          <h2>Choose your favourite language:</h2><br/>
          <div className='image-button-container'>
            <div className='image-button-row'>
              <button onClick={() => handleVote('OOPS')}>
                <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="OOPS" /><br/>Vote
              </button>
              <button onClick={() => handleVote('Python')}>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" /><br/>Vote
              </button>
            </div>
            <div className='image-button-row'>
              <button onClick={() => handleVote('Java')}>
                <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" /><br/>Vote
              </button>
              <button onClick={() => handleVote('Javascript')}>
                <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="Javascript" /><br/>Vote
              </button>
            </div>
            <div className='image-button-row'>
              <button onClick={() => handleVote('ReactJs')}>
                <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" alt="ReactJs" /><br/>Vote</button>
              <button onClick={() => handleVote('Swift')}>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732250.png" alt="Swift" /><br/>Vote
              </button>
            </div>
            <button className="btn" onClick={handleSubmit}>Submit Vote</button>
          </div>
        </>
      ) : (
        <div className='result'>
          <br />
          {selectedLanguage && (
            <>
              <p>You have voted for:</p>
              <ul>
                {selectedLanguage.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </>
          )}
          <div>
            <p>Results:</p>
            <ul>
              <li>OOPS: {votes.OOPS}</li>
              <li>Python: {votes.Python}</li>
              <li>Java: {votes.Java}</li>
              <li>Javascript: {votes.Javascript}</li>
              <li>ReactJs: {votes.ReactJs}</li>
              <li>Swift: {votes.Swift}</li>
            </ul>
          </div>
          <Link to="/">
            <button className='btn'>Vote Again</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Voting;