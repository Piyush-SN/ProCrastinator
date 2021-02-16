import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAogmqgzYaion9REFBRqxF1vJkJK-f_GT4",
    authDomain: "procrastinator-c1595.firebaseapp.com",
    databaseURL: "https://procrastinator-c1595-default-rtdb.firebaseio.com",
    projectId: "procrastinator-c1595",
    storageBucket: "procrastinator-c1595.appspot.com",
    messagingSenderId: "129728035466",
    appId: "1:129728035466:web:402696ff2ea544618b0b73"
})

export { firebaseConfig as firebase };