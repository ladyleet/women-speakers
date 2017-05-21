import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAbrsL9hPEqF_d9gEGbEZHGHNd02DW2dw",
  authDomain: "women-speakers.firebaseapp.com",
  databaseURL: "https://women-speakers.firebaseio.com",
  storageBucket: "women-speakers.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Women Speakers</h2>
          <h4>This app gives you access to a database of women speakers. </h4>
          <h4>Add yourself or other female speakers to this directory!</h4>
        </div>
        <div className="Body">
          <input type="text"/>
          <p>Search</p>
        </div>
      </div>
    );
  }
}

export default App;
