import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">Ayush</Link>
          </div>

       
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              to="/discovery"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Discovery
            </Link>
            <Link
              to="/matchmaking"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Matchmaking
            </Link>
            <Link
              to="/notifications"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Notifications
            </Link>
            <Link
              to="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Register
            </Link>
            <Link
              to="/dash"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Dashboard
            </Link>
          </div>

          
          <div className="block md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

       
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-blue-600 mt-2 rounded-lg`}
        >
          <div className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              to="/discovery"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Discovery
            </Link>
            <Link
              to="/matchmaking"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Matchmaking
            </Link>
            <Link
              to="/notifications"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Notifications
            </Link>
            <Link
              to="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Register
            </Link>
            <Link
              to="/dash"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
