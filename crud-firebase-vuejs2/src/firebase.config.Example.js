import firebase from 'firebase/app';
import 'firebase/firestore';

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

export { db };
