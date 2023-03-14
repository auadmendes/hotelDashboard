import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3vGzZchsRKhwKf8q6mDYUQbb28mONntg",
  authDomain: "hotel-dashboard-abec6.firebaseapp.com",
  projectId: "hotel-dashboard-abec6",
  storageBucket: "hotel-dashboard-abec6.appspot.com",
  messagingSenderId: "91598491716",
  appId: "1:91598491716:web:45c7d5fb1efc9256f76c11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);