import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
// import { signupUser } from '../apiHelper'; // Import signup function
import axios from 'axios'; // Import axios for API calls

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigating after successful signup

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3001/register', {
        username,
        email,
        password,
      });
      console.log(result.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError('Signup failed. Please try again.');
    }
  };
  
  return (
    <div className="bg-slate-100 dark:bg-slate-950 h-screen w-screen flex flex-col justify-center items-center px-4">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-sky-500 dark:text-cyan-400 text-center mb-6">
          Create Your Account ✨
        </h1>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-cyan-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-cyan-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-cyan-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-slate-950 font-semibold py-3 rounded-xl mt-4 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-slate-600 dark:text-gray-400 text-sm text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-sky-400 dark:text-cyan-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
