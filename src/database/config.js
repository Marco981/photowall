import * as firebase from "firebase"

var config = {
    apiKey: "AIzaSyA_DkdhesdUKO6xH5XtCw_txflzdHvqEAk",
    authDomain: "photowall-bba6c.firebaseapp.com",
    databaseURL: "https://photowall-bba6c.firebaseio.com",
    projectId: "photowall-bba6c",
    storageBucket: "photowall-bba6c.appspot.com",
    messagingSenderId: "348849887098"
  };

  firebase.initializeApp(config)
 
  const database = firebase.database()

  export {database}