import React, { useState } from 'react';
import userApi from '../api/userApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Fixed the endpoint from '/auth/login' to '/login'
      const res = await userApi.post('/login', { email, password });

      // Store token and notify user
      localStorage.setItem('token', res.data.token);
      setMessage('Login successful. Welcome User!');
    } catch (err) {
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      {message && (
        <p className={`mt-4 ${message.startsWith('Login failed') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
