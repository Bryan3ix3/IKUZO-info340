import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './profile.css';
import './index.css';

import SAMPLE_EVENTS from './data/events.json';
import FRIENDS from './data/friends.json';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById('root'));
