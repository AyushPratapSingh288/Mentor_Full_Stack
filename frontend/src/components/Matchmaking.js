import React, { useState, useEffect } from 'react';

const Matchmaking = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('/api/users/matchmaking');
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Your Matches</h1>
      {matches.length > 0 ? (
        <ul>
          {matches.map((match) => (
            <li key={match._id}>
              <h3>{match.name}</h3>
              <p>Role: {match.role}</p>
              <p>Skills: {match.skills.join(', ')}</p>
              <p>Interests: {match.interests.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matches found. Update your profile to improve your matches.</p>
      )}
    </div>
  );
};

export default Matchmaking;
