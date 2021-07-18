import firebase from 'firebase/app'
import 'firebase/firestore'

export const  firebaseConfig = {
  apiKey: "AIzaSyANe3iruF3lbTKTapEDhQJt8caM2p-EKaM",
  authDomain: "coder-shop-7ac56.firebaseapp.com",
  projectId: "coder-shop-7ac56",
  storageBucket: "coder-shop-7ac56.appspot.com",
  messagingSenderId: "930776803492",
  appId: "1:930776803492:web:aaee76a53de6653698de31"
};

const db = firebase.initializeApp(firebaseConfig);
export const dataBase = db.firestore()


