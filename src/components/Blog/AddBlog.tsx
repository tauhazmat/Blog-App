"use client";

import { useState } from 'react';
import { db, auth } from '@/firebase/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';  // Import useRouter from next/navigation

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();  // Initialize router

  const handleAddBlog = async () => {
    if (auth.currentUser) {
      try {
        await addDoc(collection(db, 'blogs'), {
          title,
          content,
          createdAt: Timestamp.now(),
          userId: auth.currentUser.uid,
        });
        alert('Blog post added!');
        router.push('/');  // Use router.push for navigation
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('You must be logged in to add a blog post.');
    }
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
};

export default AddBlog;
