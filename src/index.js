import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './profile.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwypEHeAByAGmBq0ncSlmWsmLFo_q58sY",
  authDomain: "info-340-final-project-17aa1.firebaseapp.com",
  databaseURL: "https://info-340-final-project-17aa1-default-rtdb.firebaseio.com",
  projectId: "info-340-final-project-17aa1",
  storageBucket: "info-340-final-project-17aa1.appspot.com",
  messagingSenderId: "759521387495",
  appId: "1:759521387495:web:c150824a5ad74c58a45342",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
