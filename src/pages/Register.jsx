import React, { useState } from 'react';
import userApi from '../api/userApi';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await userApi.post('/register', { name, email, password });
      setMessage(`Registration successful. Welcome ${res.data.username || name}!`);
    } catch (err) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4" onSubmit={handleRegister}>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" className="block w-full p-2 border rounded" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="block w-full p-2 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="block w-full p-2 border rounded" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Register</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
