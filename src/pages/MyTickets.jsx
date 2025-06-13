import React, { useEffect, useState } from 'react';
import ticketApi from '../api/ticketApi';

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await ticketApi.get('/tickets/my-tickets', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTickets(res.data);
      } catch (err) {
        setError('Failed to fetch tickets');
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Tickets</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {tickets.length === 0 ? (
        <p>No tickets booked yet.</p>
      ) : (
        <ul className="space-y-4">
          {tickets.map((ticket, index) => (
            <li key={index} className="border p-4 rounded">
              <p><strong>Event ID:</strong> {ticket.eventId}</p>
              <p><strong>Name:</strong> {ticket.name}</p>
              <p><strong>Email:</strong> {ticket.email}</p>
              <p><strong>Quantity:</strong> {ticket.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
