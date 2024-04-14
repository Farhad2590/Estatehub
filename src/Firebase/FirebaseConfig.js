// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside Firebase' ,import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: "AIzaSyCUHVEo6KlhsReX_p4gRfGpPcC-IQdU_zY",
  authDomain: "b9a9-real-estate-farhad2590.firebaseapp.com",
  projectId: "b9a9-real-estate-farhad2590",
  storageBucket: "b9a9-real-estate-farhad2590.appspot.com",
  messagingSenderId: "488922938469",
  appId: "1:488922938469:web:30ae4527b41ab4afb0da8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export auth
