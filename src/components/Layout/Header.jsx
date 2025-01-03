import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center">
    <h1 className="text-xl font-bold">Admin Panel</h1>
    <nav>
      <Link to="/" className="mx-2 hover:underline">Home</Link>
      <Link to="/companies" className="mx-2 hover:underline">Companies</Link>
      <Link to="/communication" className="mx-2 hover:underline">Commmunications</Link>
    </nav>
  </header>
);

export default Header;
