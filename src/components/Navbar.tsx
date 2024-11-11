"use client"; // Make sure this is a client component

import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { signOut } from 'firebase/auth';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/login'); // Redirect to login after signing out
  };

  // Inline styling for the navbar
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '1.5rem',
  };

  const liStyle = {
    fontSize: '1.1rem',
    color: 'white',
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e5533f',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
      <li style={liStyle}>
          <h1>Tauha's Blog App</h1>
        </li>
        <li style={liStyle}>
          <Link href="/" style={linkStyle}>Home</Link>
        </li>
        {user ? (
          <>
            <li style={liStyle}>
              <Link href="/add-blog" style={linkStyle}>Create Blog</Link>
            </li>
            <li style={liStyle}>
              <button
                onClick={handleSignOut}
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li style={liStyle}>
              <Link href="/login" style={linkStyle}>Login</Link>
            </li>
            <li style={liStyle}>
              <Link href="/signup" style={linkStyle}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
