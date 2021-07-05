import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YourApiKey',
  authDomain: 'YourAppDomain',
  projectId: 'ProyectId',
  storageBucket: 'Storage...',
  messagingSenderId: 'YourId',
  appId: 'YourAppId',
};

// Inittialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
