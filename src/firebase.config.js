import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAJleWezlSRg_X_q9IrH5Z2NSD4oSs9FZg",
  authDomain: "foodapp-3508c.firebaseapp.com",
  databaseURL: "https://foodapp-3508c-default-rtdb.firebaseio.com",
  projectId: "foodapp-3508c",
  storageBucket: "foodapp-3508c.appspot.com",
  messagingSenderId: "897559071655",
  appId: "1:897559071655:web:4867400a5098ae05e00482"
};

// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app , firestore , storage}
