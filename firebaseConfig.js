import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDnEiKw7cEN4_41ePJlN5Iez9bCaI7N3UQ',
  authDomain: 'gym-ignite.firebaseapp.com',
  projectId: 'gym-ignite',
  storageBucket: 'gym-ignite.appspot.com',
  messagingSenderId: '1072344493475',
  appId: '1:1072344493475:web:d384118b0360ff307a3e16',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
