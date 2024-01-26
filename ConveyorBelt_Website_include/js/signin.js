import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3tle8OAtRbIcGK4suPkPx55Jb2FUdy8",
  authDomain: "smart-elevation-system.firebaseapp.com",
  projectId: "smart-elevation-system",
  storageBucket: "smart-elevation-system.appspot.com",
  messagingSenderId: "182248346079",
  appId: "1:182248346079:web:c88f0b281365fc7ad4b46a",
  measurementId: "G-WG5NN4V9V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
firebase.initializeApp(firebaseConfig)
const auth = getAuth(app);
$('#login-btn').click(function(){
let email=$('#Uname').val();
let password=$('#Pass').val();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  if(user){
    sessionStorage.setItem("uid",user.uid);
    // sessionStorage.setItem("reload",true);
   
    
      // window.alert("Logged in successfully");
      if(user.uid)
      {
        window.location.href="/simple/index.html";
      }
      
    }
    
})

})