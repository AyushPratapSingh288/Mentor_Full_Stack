import React, { useState, useEffect } from 'react';

const Discovery = () => {
  const [profiles, setProfiles] = useState([]);
  const [filters, setFilters] = useState({ role: '', skills: '', interests: '' });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/api/users/discovery');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProfiles = profiles.filter((profile) => {
    const { role, skills, interests } = filters;
    return (
      (!role || profile.role === role) &&
      (!skills || profile.skills.includes(skills)) &&
      (!interests || profile.interests.includes(interests))
    );
  });

  return (
    <div>
      <h1>Discover Users</h1>
      <div>
        <label>Role:</label>
        <select name="role" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="mentor">Mentor</option>
          <option value="mentee">Mentee</option>
        </select>
        <label>Skills:</label>
        <input
          type="text"
          name="skills"
          placeholder="e.g., React"
          onChange={handleFilterChange}
        />
        <label>Interests:</label>
        <input
          type="text"
          name="interests"
          placeholder="e.g., Web Development"
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredProfiles.map((profile) => (
          <li key={profile._id}>
            <h3>{profile.name}</h3>
            <p>Role: {profile.role}</p>
            <p>Skills: {profile.skills.join(', ')}</p>
            <p>Interests: {profile.interests.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discovery;
