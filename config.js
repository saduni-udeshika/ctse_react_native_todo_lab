import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBc77ssxLX7wORc10XuR9AH3z-jZUyJcfU",
    authDomain: "react-native-lab-4742a.firebaseapp.com",
    projectId: "react-native-lab-4742a",
    storageBucket: "react-native-lab-4742a.appspot.com",
    messagingSenderId: "572333903304",
    appId: "1:572333903304:web:6d4a8359aa45f5553f04fd"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};