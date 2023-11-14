import React from 'react';
import './Score.css';

const Score = ({ score }) => {
    return (
      <div className="score">
        <p className="scoreDate">Date: {score.date}</p>
        <p className="scoreValue">Score: {score.score}</p>
      </div>
    );
  };

export default Score;
