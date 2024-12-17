import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/users/notifications');
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Notifications</h1>

        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700">{notification.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-700 text-lg">
            No notifications at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Notifications;

