import React,{useState} from "react";
import { signInWithEmailAndPassword,getAuth } from "firebase/auth";
import app from "../firebase";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
  
    const handleLogin = async () => {
      try {
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth, username, password);
        setError(null);
        setModalOpen(false); // Close modal on successful login
        console.log('Login successfully!');
      } catch (error) {
        setError('Invalid username or password. Please try again.');
        console.error('Login failed:', error);
      }
    };
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  
    return (
      <div className="justify-center">
        <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Login
        </button>
  
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute bg-black opacity-50 inset-0" onClick={closeModal}></div>
            <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md relative z-10">
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
          </div>
        )}
      </div>
    );
  };
  
  export default LoginForm;