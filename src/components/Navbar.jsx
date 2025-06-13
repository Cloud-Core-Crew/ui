import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/register" className="hover:underline">Register</Link>
      <Link to="/events" className="hover:underline">Events</Link>
      <Link to="/my-tickets" className="hover:underline">My Tickets</Link>
    </nav>
  );
}
