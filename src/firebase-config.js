// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAcQdlBOP1xUbR_K4dinhUByXUB79EVvvo",
//     authDomain: "faniriantsoa-portfolio.firebaseapp.com",
//     projectId: "faniriantsoa-portfolio",
//     storageBucket: "faniriantsoa-portfolio.appspot.com",
//     messagingSenderId: "652143407994",
//     appId: "1:652143407994:web:40a85273459150be04dcc3",
//     measurementId: "G-9TQ6W54EKK"
// };
const firebaseConfig = {
    apiKey: meta.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: meta.env.REACT_APP_FIREBASE_API_AUTHDOMAIN,
    projectId: meta.env.REACT_APP_FIREBASE_API_PROJECTID,
    storageBucket: meta.env.REACT_APP_FIREBASE_API_STORAGEBUCKET,
    messagingSenderId: meta.env.REACT_APP_FIREBASE_API_MESSAGINGSENDERID,
    appId: meta.env.REACT_APP_FIREBASE_API_APPID,
    measurementId: meta.env.REACT_APP_FIREBASE_API_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
