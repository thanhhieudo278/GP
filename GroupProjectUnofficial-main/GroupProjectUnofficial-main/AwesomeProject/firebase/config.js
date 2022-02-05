// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQhNGIGuEDf32L_jlxxwzUVPYRRDiQ8TY',
  authDomain: 'fitnessapp-ec7ea.firebaseapp.com',
  projectId: 'fitnessapp-ec7ea',
  storageBucket: 'fitnessapp-ec7ea.appspot.com',
  messagingSenderId: '357850729904',
  appId: '1:357850729904:web:e2da3ed511841744d6da75',
  measurementId: 'G-4Q4X0E3MZ9',
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({experimentalForceLongPolling: true});
} else {
  app = firebase.app();
}

export {firebase};
