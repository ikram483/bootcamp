import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const handleVote = (langName) =>
    setLanguages((prev) =>
      prev.map((lang) =>
        lang.name === langName
          ? { ...lang, votes: lang.votes + 1 }
          : lang
      )
    );

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Vote for your favorite language</h1>
      <div style={{ display: 'inline-block', textAlign: 'left' }}>
        {languages.map((lang) => (
          <div
            key={lang.name}       
            style={{
              margin: '10px 0',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: 4,
            }}
          >
            <strong>{lang.name}</strong>: {lang.votes}{' '}
            <button onClick={() => handleVote(lang.name)}>
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}