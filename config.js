import firebase from "firebase"
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCcdQNyegKz6mhW7RDD_pLysHvsSYAYFOk",
    authDomain: "e-library-ac3c9.firebaseapp.com",
    projectId: "e-library-ac3c9",
    storageBucket: "e-library-ac3c9.appspot.com",
    messagingSenderId: "1645883221",
    appId: "1:1645883221:web:2a34d35eafff5202d2c9dc"
  };

firebase.initializeApp(firebaseConfig) 
export default firebase.firestore()