const firebaseConfig = {
    apiKey: "AIzaSyAUU6ltfxW3MMVto4OUQvnPSGfyj9oWz6c",
    authDomain: "heroanvampire.firebaseapp.com",
    projectId: "heroanvampire",
    storageBucket: "heroanvampire.appspot.com",
    messagingSenderId: "688986020356",
    appId: "1:688986020356:web:da1ca1b696142c96017351"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
