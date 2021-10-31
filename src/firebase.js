import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBBV013xshVyDI_FDlcClk0tnQ5CH9Tmw4",
    authDomain: "facebook-clone-b363a.firebaseapp.com",
    projectId: "facebook-clone-b363a",
    storageBucket: "facebook-clone-b363a.appspot.com",
    messagingSenderId: "594037720453",
    appId: "1:594037720453:web:4cc15e31d95d3db3c870ec",
    measurementId: "G-ZD9XTCZVR3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;