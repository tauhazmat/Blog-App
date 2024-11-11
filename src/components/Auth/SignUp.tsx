'use client';

import { useState } from 'react';
import { auth } from '@/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

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

  const noUserStyle = {
    color: '#FF5722',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '10px',
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

  return (
    <div style={{ padding: '50px' }}>
      <h2 style={headingStyle}>Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()} style={formStyle}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" onClick={handleSignUp} style={buttonStyle}>
          Sign Up
        </button>
        {/* Handle error display */}
        <div style={errorStyle}>
          {email && password && password.length < 6 && (
            <p>Password should be at least 6 characters long</p>
          )}
        </div>
      </form>
      <div style={noUserStyle}>
        already a user? 😊<a href="/login"> Login here</a>
      </div>
    </div>
  );
};

export default SignUp;
