import React, { useState, useEffect } from 'react';

const Discovery = () => {
  const [profiles, setProfiles] = useState([]); 
  const [filters, setFilters] = useState({ role: '', skills: '', interests: '' });
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        const data = await response.json();

        console.log(data);
        setProfiles(data.user_data);
        setFilteredProfiles(data.user_data); 
      } catch (error) {
        console.error('Error fetching profiles:', error);
        setProfiles([]);
        setFilteredProfiles([]);
      }
    };
    fetchProfiles();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = profiles;

      if (filters.role) {
        filtered = filtered.filter((profile) => profile.role === filters.role);
      }

      if (filters.skills) {
        filtered = filtered.filter((profile) => 
          profile.skills && profile.skills.toLowerCase().includes(filters.skills.toLowerCase())
        );
      }

      if (filters.interests) {
        filtered = filtered.filter((profile) => 
          profile.interests && profile.interests.toLowerCase().includes(filters.interests.toLowerCase())
        );
      }

      setFilteredProfiles(filtered);
    };

    applyFilters();
  }, [filters, profiles]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Discover Users</h1>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-600">Role:</label>
              <select
                id="role"
                name="role"
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All</option>
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
              </select>
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-600">Skills:</label>
              <input
                id="skills"
                type="text"
                name="skills"
                placeholder="e.g., React"
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-600">Interests:</label>
              <input
                id="interests"
                type="text"
                name="interests"
                placeholder="e.g., Web Development"
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Users</h2>
          {filteredProfiles.length > 0 ? (
            <ul>
              {filteredProfiles.map((profile, index) => (
                <li key={index} className="p-2 border-b border-gray-200">
                  <p className="font-bold">Name: {profile.username}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No users found matching the filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discovery;

