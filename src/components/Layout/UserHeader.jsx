import React from 'react';
import NotificationIcon from '../Dashboard/NotificationIcon';

const UserHeader = ({companies}) => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/reshot-icon.svg"
          alt="Logo"
          className="h-8 w-8 mr-3"
        />
        <h1 className="text-xl font-bold">User Dashboard</h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/admin" className="hover:underline">
          Admin
        </a>
        <a href="/analytics" className="hover:underline">
          Analytics
        </a>
      </nav>

      {/* User Dropdown */}
      <div className="relative">
      <NotificationIcon  companies={companies}/>
        <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded w-48 py-2 hidden group-hover:block">
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
            My Profile
          </a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
            Settings
          </a>
          <button
            onClick={() => alert('Logged out!')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
        
      </div>
    </header>
  );
};

export default UserHeader;
