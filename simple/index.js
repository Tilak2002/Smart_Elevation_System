// Firebase Database Communication
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3tle8OAtRbIcGK4suPkPx55Jb2FUdy8",
  authDomain: "smart-elevation-system.firebaseapp.com",
  databaseURL: "https://smart-elevation-system-default-rtdb.firebaseio.com",
  projectId: "smart-elevation-system",
  storageBucket: "smart-elevation-system.appspot.com",
  messagingSenderId: "182248346079",
  appId: "1:182248346079:web:c88f0b281365fc7ad4b46a",
  measurementId: "G-WG5NN4V9V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
const database = firebase.database();
// var db = firebase.firestore();


// Elevator Control Code Started

let current = 0;
document.addEventListener("DOMContentLoaded", function () {
  const floorListItems = document.querySelectorAll(".number .btn");

  floorListItems.forEach((item) => {
    const handleButtonClick = function () {
      // compare weight started
      /*var weight=window.prompt("Enter weight ")
      const user = database.ref('televator')
      user.on("value",function(snapshot) {
        const data = snapshot.val();
        console.log(data.weight)
        if(weight>data.weight)
      {
        window.alert("Entered weight is greater than capacity of lift")
      }
       
      })*/


      // compare weight ended
      const floor = parseInt(this.getAttribute("data-floor"));
      const height = floor * 20;
      const animate = Math.abs(current - floor) * 1000;

      if (floor === current) return;

      document.getElementById("rightDoor").classList.remove("active-right");
      document.getElementById("leftDoor").classList.remove("active-left");

      setTimeout(() => {
        const elevatorContainer = document.getElementById("elevatorContainer");
        elevatorContainer.style.transition = "all " + animate + "ms linear";
        elevatorContainer.style.bottom = height + "%";
        current = floor;


        // Firebase code started

// ============ update data to firebase===============
  
   console.log("abcd")
  //var db = firebase.firestore();
  var database = firebase.database();

  const dataRef = database.ref("televator")

  const newData = {
  floor:current
  };
  
  dataRef.update(newData)
// window.alert("Data successfully updated!");

// Firebase code ended

        setTimeout(() => {
          document.getElementById("rightDoor").classList.add("active-right");
          document.getElementById("leftDoor").classList.add("active-left");
        }, animate);
      }, 3000);
    };

    item.addEventListener("click", handleButtonClick);

    return () => {
      item.removeEventListener("click", handleButtonClick);
    };
  });
});

      // Elevator Control Code Ended