import * as firebase from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCqYdOz9SFfPbmOJ7aaEA-443ybQgYiesY",
  authDomain: "zeal-database.firebaseapp.com",
  databaseURL: "https://zeal-database.firebaseio.com",
  projectId: "zeal-database",
  storageBucket: "zeal-database.appspot.com",
  messagingSenderId: "511559032114",
  appId: "1:511559032114:web:88e4920e2343262c59cb2b",
  measurementId: "G-YVBB0C2NHS"
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
