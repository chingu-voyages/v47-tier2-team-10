import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, username, password);
      setError(null);
      console.log('Login successful!');
    } catch (error) {
      setError('Invalid username or password. Please try again.');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 border rounded-md w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 border rounded-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
