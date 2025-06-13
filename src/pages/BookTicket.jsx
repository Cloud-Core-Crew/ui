import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookTicket() {
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  // Fetch available events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:4002/api/events');
        setEvents(res.data);
        if (res.data.length > 0) {
          setEventId(res.data[0]._id);
        }
      } catch (err) {
        console.error('Failed to fetch events:', err);
      }
    };

    fetchEvents();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('Please login first to book tickets.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:4001/api/tickets',
        {
          name,
          email,
          quantity,
          eventId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Ticket booked successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Booking failed. Try again.');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book Your Ticket</h2>
      <form className="space-y-4" onSubmit={handleBooking}>
        <select
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.title} - {new Date(event.date).toLocaleString()}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-2 border rounded"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Confirm Booking
        </button>
      </form>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
