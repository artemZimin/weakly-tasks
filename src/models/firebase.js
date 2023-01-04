// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCuyq1t35MdoiYC2XL-KJ1k0ecqql819Wo',
  authDomain: 'weakly-tasks.firebaseapp.com',
  projectId: 'weakly-tasks',
  storageBucket: 'weakly-tasks.appspot.com',
  messagingSenderId: '930678157481',
  appId: '1:930678157481:web:40ad97b16070744c1f39b8',
  measurementId: 'G-01K5LML14H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
