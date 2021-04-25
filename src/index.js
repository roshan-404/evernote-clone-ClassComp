import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebase } from '@firebase/app';

// const {firebase} = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyD8wcAwD09_k4z2oxhspusZsxmCnTrwHZM",
  authDomain: "evernote-clone-c.firebaseapp.com",
  projectId: "evernote-clone-c",
  storageBucket: "evernote-clone-c.appspot.com",
  messagingSenderId: "620473747495",
  appId: "1:620473747495:web:f9660733bdb3b42423a602"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
