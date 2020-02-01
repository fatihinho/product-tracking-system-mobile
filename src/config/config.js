import firebase from 'firebase';

const DB_CONFIG = {
  apiKey: "AIzaSyBBG_0nMdIlBnl3FOVdwS6jb-KPHl74AZs",
  authDomain: "uts-app-d480b.firebaseapp.com",
  databaseURL: "https://uts-app-d480b.firebaseio.com",
  projectId: "uts-app-d480b",
  storageBucket: "uts-app-d480b.appspot.com",
  messagingSenderId: "34489307785",
  appId: "1:34489307785:web:1dc73ce5888400eefbac58",
  measurementId: "G-P7SR7VL0NG"
};

const Firebase = firebase.initializeApp(DB_CONFIG);
export default Firebase;