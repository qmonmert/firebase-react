import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA2n9YUORKUMW2P-2vkhrc6R6X-NkGmaZY",
  authDomain: "popping-fire-9851.firebaseapp.com",
  databaseURL: "https://popping-fire-9851.firebaseio.com",
  storageBucket: "popping-fire-9851.appspot.com",
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
