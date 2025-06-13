import React, { useEffect, useState } from 'react';
import eventApi from '../api/eventApi';
import { Link } from 'react-router-dom';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await eventApi.get('/events');
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch events:', err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event._id} className="border p-4 rounded">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              <Link to={`/book/${event._id}`}>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                  Book Ticket
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
