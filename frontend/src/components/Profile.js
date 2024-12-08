import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [bio, setBio] = useState(user?.bio || '');
  const [skills, setSkills] = useState(user?.skills.join(', ') || '');
  const [interests, setInterests] = useState(user?.interests.join(', ') || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bio, skills: skills.split(', '), interests: interests.split(', ') }),
      });
      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Profile update failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Skills (comma-separated)"
      />
      <input
        type="text"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        placeholder="Interests (comma-separated)"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Profile;
