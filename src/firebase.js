import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8U1t3JP1yN8DYATXbjOQPVpeCWjaD3d0",
  authDomain: "gestor-gastos-a21b2.firebaseapp.com",
  projectId: "gestor-gastos-a21b2",
  storageBucket: "gestor-gastos-a21b2.appspot.com",
  messagingSenderId: "867736298864",
  appId: "1:867736298864:web:f340abdeaf8f17ad625bb5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
