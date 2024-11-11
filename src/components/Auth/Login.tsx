'use client'; // Ensure this component is a client-side component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase'; // Your Firebase auth import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Using react-firebase-hooks for handling authentication
  const [signInWithEmailAndPassword, userCredential, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Debugging: Log auth state to check if it's updating
  useEffect(() => {
    if (userCredential) {
      console.log('User signed in:', userCredential);
      // Redirect to homepage after successful login
      router.push('/');
    }
  }, [userCredential, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login clicked'); // Debugging line to ensure the login button triggers

    try {
      await signInWithEmailAndPassword(email, password); // Sign in using the Firebase hook
    } catch (err) {
      console.error('Login failed', err);
      alert('Login failed');
    }
  };

  // Styling objects (you can modify them as needed)
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
  };

  const noUserStyle = {
    color: '#FF5722',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '10px',
  };

  return (
    <div style={{ padding: '50px' }}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p style={errorStyle}>{error.message}</p>}
      </form>
      <div style={noUserStyle}>
        Not a user? <a href="/signup">Sign up here</a>
      </div>
    </div>
  );
};

export default Login;
