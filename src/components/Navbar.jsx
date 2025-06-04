import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">PDF Sports</div>
      <div className="space-x-6">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/events" className="hover:text-yellow-400">Events</a>
        <a href="/book" className="hover:text-yellow-400">Book Ticket</a>
        <a href="/shop" className="hover:text-yellow-400">Merchandise</a>
        <a href="/login" className="hover:text-yellow-400">Login</a>
        <a href="/register" className="hover:text-yellow-400">Register</a>
      </div>
    </nav>
  );
}
