import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCAd2FeShwf-PoZP2lT0SOBwLNtqD9cVcg",
  authDomain: "react-slack-clone-2e4e7.firebaseapp.com",
  databaseURL: "https://react-slack-clone-2e4e7.firebaseio.com",
  projectId: "react-slack-clone-2e4e7",
  storageBucket: "react-slack-clone-2e4e7.appspot.com",
  messagingSenderId: "507976155512",
  appId: "1:507976155512:web:315499a62929500a27c88d",
  measurementId: "G-576V9ZJK7L",
};
firebase.initializeApp(config);

export default firebase;
