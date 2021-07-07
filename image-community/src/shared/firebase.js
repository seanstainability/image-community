import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoH0pa6rPynW1qNWJ6Xm8oL1REx85M7Q4",
  authDomain: "image-community-49eb0.firebaseapp.com",
  projectId: "image-community-49eb0",
  storageBucket: "image-community-49eb0.appspot.com",
  messagingSenderId: "685797289641",
  appId: "1:685797289641:web:9f4dd5af163223765083b8",
  measurementId: "G-BMYF0FCWVJ",
  databaseURL: "https://image-community-49eb0-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth(); // 로그인 인증
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
export { auth, apiKey, firestore, storage, realtime };
