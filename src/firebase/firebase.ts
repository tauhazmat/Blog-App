// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCRw4w1_bA9MvQWl_n5iUldhp8mDI1Uzeo",
//   authDomain: "tauha-blog.firebaseapp.com",
//   projectId: "tauha-blog",
//   storageBucket: "tauha-blog.firebasestorage.app",
//   messagingSenderId: "778192678023",
//   appId: "1:778192678023:web:ace5758a1f1c882e335c22",
//   measurementId: "G-MFLT3H4JJ6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




































import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCRw4w1_bA9MvQWl_n5iUldhp8mDI1Uzeo",
  authDomain: "tauha-blog.firebaseapp.com",
  projectId: "tauha-blog",
  storageBucket: "tauha-blog.firebasestorage.app",
  messagingSenderId: "778192678023",
  appId: "1:778192678023:web:ace5758a1f1c882e335c22",
  measurementId: "G-MFLT3H4JJ6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export default app;



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore
const auth = getAuth(app);

export { db, auth };