"use client";  // Add this line to mark the component as client-side

import { useEffect, useState } from 'react';
// import { db } from '../../firebase/firebase';
// import { db } from '@/firebase/firebase'
import { db } from '@/firebase/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

const blogheading = {
  color: 'black',
  fontSize: '20px',
  fontWeight: 'bold',
};

const blogDescription = {
  color: 'grey',
  fontSize: '15px',
  fontWeight: 'light',
};

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      setBlogs(blogsData);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h2>Blog Posts:</h2>
      {blogs.map((blog) => (
        <div style={{border: '1px solid black', width: '30%', margin:'10px'}} key={blog.id}>
          <h3 style={blogheading}>{blog.title}</h3>
          <p style={blogDescription}>{blog.content}</p>
          <small>{new Date(blog.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
