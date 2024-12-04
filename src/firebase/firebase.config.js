// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsmiOfo9bhDToqTXJdxSu4_Ow59dWVs4Q",
  authDomain: "a-crowd-funding-project.firebaseapp.com",
  projectId: "a-crowd-funding-project",
  storageBucket: "a-crowd-funding-project.firebasestorage.app",
  messagingSenderId: "475299993318",
  appId: "1:475299993318:web:7e08bd76ba158f75568d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth