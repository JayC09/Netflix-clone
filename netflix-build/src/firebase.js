// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAir-XMAqHegmMACIaimjUVy55qWq3RN7U",
    authDomain: "netflix-clone-react-f575d.firebaseapp.com",
    projectId: "netflix-clone-react-f575d",
    storageBucket: "netflix-clone-react-f575d.appspot.com",
    messagingSenderId: "877445607678",
    appId: "1:877445607678:web:34bd44d238845267a3f5af",
    measurementId: "G-P6GPMGTQV3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;