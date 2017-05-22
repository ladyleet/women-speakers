import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAbrsL9hPEqF_d9gEGbEZHGHNd02DW2dw",
  authDomain: "women-speakers.firebaseapp.com",
  databaseURL: "https://women-speakers.firebaseio.com",
  storageBucket: "women-speakers.appspot.com"
};
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
