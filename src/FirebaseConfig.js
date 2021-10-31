import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3pKrHdX7KH1W79SkTD8SavXGHutkZC_I",
  authDomain: "event-app-2021.firebaseapp.com",
  projectId: "event-app-2021",
  storageBucket: "event-app-2021.appspot.com",
  messagingSenderId: "1084757940173",
  appId: "1:1084757940173:web:df16d28b586f02835a1684",
  measurementId: "G-RVK486DTW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;