import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGun5nQ6qGhZKNnm4Jlr3xhGnlkOA3Tc",
  authDomain: "fgcapp-e162c.firebaseapp.com",
  projectId: "fgcapp-e162c",
  storageBucket: "fgcapp-e162c.appspot.com",
  messagingSenderId: "221573151704",
  appId: "1:221573151704:web:e10f9548e9c197ed5ad0ad",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
