import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8U1t3JP1yN8DYATXbjOQPVpeCWjaD3d0",
  authDomain: "gestor-gastos-a21b2.firebaseapp.com",
  projectId: "gestor-gastos-a21b2",
  storageBucket: "gestor-gastos-a21b2.appspot.com",
  messagingSenderId: "867736298864",
  appId: "1:867736298864:web:f340abdeaf8f17ad625bb5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
