import { useState } from 'react';
import { auth } from '../firebase'; // Firebase authentication
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully signed up
        navigate('/login'); // Redirect to home page after sign up
      })
      .catch((error) => {
        setError('Error signing up. Please try again.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-6 text-2xl font-bold">Create an Account</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignUp} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline">
          Login Here
        </button>
      </p>
    </div>
  );
}

export default SignUp;
