

import firebase from 'firebase/compat/app';


import 'firebase/compat/firestore';



import { getFirestore } from 'firebase/firestore';


//require("dotenv").config()

const app = firebase.initializeApp({
    apiKey: "AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",
  	authDomain: "taxis-e44d6.firebaseapp.com",
  	projectId: "taxis-e44d6",
  	storageBucket: "taxis-e44d6.appspot.com",
  	messagingSenderId: "603667662446",
  	appId: "1:603667662446:web:0014b763a2a4acca92487f"
});


export const firestoreDB = getFirestore(app);
