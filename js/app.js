import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase-auth";

const firebaseConfig = {
    apiKey: "AIzaSyBk1qnjV47Nu51JcfXUk0hoSUZNgfHcXpw",
    authDomain: "frontend-avanzado-c2beb.firebaseapp.com",
    projectId: "frontend-avanzado-c2beb",
    storageBucket: "frontend-avanzado-c2beb.appspot.com",
    messagingSenderId: "390215231514",
    appId: "1:390215231514:web:467cb8a9970059ce2dc9a3",
    measurementId: "G-QK8720H738"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//configuración de autentificación
const auth = getAuth(app);

auth.onAuthStateChanged(function(user) {
  if(user) {
    document.querySelector('#login').style.display ="none";
    document.querySelector('#logout').style.display ="inline";
  }else {
    document.querySelector('#logout').style.display= "none";
    document.querySelector('#login').style.display= "inline";
  }
});


document.querySelector('#login').addEventListener('click', function() {
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider);
});

document.querySelector('#logout').addEventListener('click', function() {
  auth.signOut()
    .then(()=> console.log('Adios'))
    .catch(err=> console.log(err));
})


