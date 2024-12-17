import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
    
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.username || "Guest"}!
        </h2>
        <p className="text-gray-600 mt-2">Here’s a quick look at your notifications.</p>
      </div>

     
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h3>
        {user?.notifications?.length > 0 ? (
          <ul className="space-y-3">
            {user.notifications.map((notification, idx) => (
              <li
                key={idx}
                className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
              >
                <p className="text-gray-700">{notification.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have no notifications at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

