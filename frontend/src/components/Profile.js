import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState({});
  const [editingField, setEditingField] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    bio: '',
    skills: '',
    interests: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/profile');
        setUserData(res.data);
        setFormData({
          username: res.data.username || '',
          email: res.data.email || '',
          password: '', // Do not fetch password for security reasons
          role: res.data.role || '',
          bio: res.data.bio || '',
          skills: res.data.skills?.join(', ') || '',
          interests: res.data.interests?.join(', ') || '',
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (field) => setEditingField(field);

  const handleCancel = () => setEditingField(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { [editingField]: formData[editingField] };
      if (editingField === 'skills' || editingField === 'interests') {
        updatedData[editingField] = formData[editingField].split(',').map((item) => item.trim());
      }
      const res = await axios.put(`http://localhost:5000/profile/${editingField}`, updatedData);
      setUserData((prev) => ({ ...prev, ...res.data }));
      setEditingField(null);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Profile</h2>

        {['username', 'email', 'password', 'role', 'bio', 'skills', 'interests'].map((field) => (
          <div key={field} className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 capitalize">{field}:</h3>
            {editingField === field ? (
              <form onSubmit={handleSubmit} className="space-y-2">
                {field === 'bio' ? (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  />
                ) : (
                  <input
                    type={field === 'password' ? 'password' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                )}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  {field === 'skills' || field === 'interests'
                    ? userData[field]?.join(', ') || 'No data provided'
                    : userData[field] || 'No data provided'}
                </p>
                <button
                  onClick={() => handleEdit(field)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
