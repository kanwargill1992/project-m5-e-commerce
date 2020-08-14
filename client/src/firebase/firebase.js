import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCCyniG0zRwBshajWt9PjAvvtlH8yIaC_Y",
  authDomain: "the-ark-project-cbi4.firebaseapp.com",
  databaseURL: "https://the-ark-project-cbi4.firebaseio.com",
  projectId: "the-ark-project-cbi4",
  storageBucket: "the-ark-project-cbi4.appspot.com",
  messagingSenderId: "492846401338",
  appId: "1:492846401338:web:d1f29aec4f670c0aaeb203",
  measurementId: "G-RS1CS3TRN1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;