import React from 'react';
import Score from './Score';
import './Student.css';

const Student = ({ student }) => {
    return (
      <div className="studentContainer">
        <h2 className="studentName">{student.name}</h2>
        <p className="studentBio">{student.bio}</p>
        <div className="scores">
          <h3>Scores:</h3>
          {student.scores.map((score, index) => (
            <Score key={index} score={score} />
          ))}
        </div>
      </div>
    );
  };

export default Student;
