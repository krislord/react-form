import { initializeApp } from "firebase/app";
import "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REACT_FIREBASE_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTODOMAIN,
  projectId: process.env.REACT_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_FIREBASE_APPID,
});
export const auth = app.auth();
export default app;
