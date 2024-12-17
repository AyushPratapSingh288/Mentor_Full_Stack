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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Your Matches</h1>
        {matches.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <li
                key={match._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">{match.name}</h3>
                <p className="text-sm text-gray-600">Role: {match.role}</p>
                <p className="text-sm text-gray-600">Skills: {match.skills.join(', ')}</p>
                <p className="text-sm text-gray-600">Interests: {match.interests.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-700 text-lg">
            No matches found. Update your profile to improve your matches.
          </p>
        )}
      </div>
    </div>
  );
};

export default Matchmaking;

