import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to the Mentorship Platform
        </h1>
        <p className="text-lg md:text-xl">
          Connect with mentors and mentees, discover profiles, and build meaningful professional relationships.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

