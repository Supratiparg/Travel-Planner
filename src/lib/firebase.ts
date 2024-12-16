import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZPiPiNE9KgVWGqTQUJjIE4g-QGqFn8Yk",
  authDomain: "ai-trip-planner-stackblitz.firebaseapp.com",
  projectId: "ai-trip-planner-stackblitz",
  storageBucket: "ai-trip-planner-stackblitz.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:123456789012345678901"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();