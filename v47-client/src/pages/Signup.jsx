import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords don't match");
        return;
      }
      const auth = getAuth();
   
      try{
        await signInWithEmailAndPassword(auth,email,password)
        setError('Email is already in use');
        return;
      }catch(signInError){
        if(signInError.code === 'auth/user-not-found'){
          await createUserWithEmailAndPassword(auth, email, password);
          setError(null);
          setModalOpen(false);
      console.log('Signup successfully!');
        }
      }
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.error('Signup failed:', error);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (

    <div>
    <button onClick={openModal} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
      Signup
    </button>
    {isModalOpen &&(
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
  <div className="absolute bg-black opacity-50 inset-0" onClick={closeModal}></div>
  <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md z-50">

      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 p-2 border rounded-md w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="button"
          onClick={handleSignup}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Signup
          </button>
        </form>
      </div>
      </div>
  )}
    </div>
  );
};

export default Signup;
