import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAw4e7nGb_gKGOC3ZvllsMrg7f_lzR6N0U",
    authDomain: "whatsapp-clone-ca79a.firebaseapp.com",
    projectId: "whatsapp-clone-ca79a",
    storageBucket: "whatsapp-clone-ca79a.appspot.com",
    messagingSenderId: "157746970472",
    appId: "1:157746970472:web:2adc9a62fc49df4e1560dd",
    measurementId: "G-BJSYRGL10R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;