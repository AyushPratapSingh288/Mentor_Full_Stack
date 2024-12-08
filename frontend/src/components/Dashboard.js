import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user?.username}</h2>
      <h3>Notifications</h3>
      <ul>
        {user?.notifications?.map((notification, idx) => (
          <li key={idx}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
