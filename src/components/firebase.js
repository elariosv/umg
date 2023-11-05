import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8pzkMC2keyvcGEdDp-ZukrFNwoGFL6RI",
    authDomain: "vital-platform-404114.firebaseapp.com",
    projectId: "vital-platform-404114",
    storageBucket: "vital-platform-404114.appspot.com",
    messagingSenderId: "432360311676",
    appId: "1:432360311676:web:6e69655b4b689511e0b2f9",
    measurementId: "G-ZW5QY6DT80"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
