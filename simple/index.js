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
// Elevator Control Code Started
let current = 0;
let previous = 0;

document.addEventListener("DOMContentLoaded", function () {
  const floorListItems = document.querySelectorAll(".number .btn");

  floorListItems.forEach((item) => {
    const handleButtonClick = function () {
      const compare = () => {
        var weight = window.prompt("Enter weight ");
        weight = parseInt(weight);
        console.log(weight);

        const user = database.ref('televator');
        user.once("value", function(snapshot) {
          const data = snapshot.val();
          console.log(data.weight);
          if(weight!= null && weight>0)
          {
            const dataRef = database.ref('televator')

const newData = {
  rtweight:weight
};

dataRef.update(newData)

            if (weight > data.weight) {
              window.alert("Entered weight is greater than capacity of lift");
              compare(); // Prompt again if weight is greater
            } else {
              // Proceed with elevator movement if weight is valid
              const floor = parseInt(item.getAttribute("data-floor"));
              console.log("Floor selected:", floor);
              const height = floor * 26.6;
              const animate = Math.abs(current - floor) * 7000;
  
              if (floor !== current) {
                document.getElementById("rightDoor").classList.remove("active-right");
                document.getElementById("leftDoor").classList.remove("active-left");
  
                setTimeout(() => {
                  const elevatorContainer = document.getElementById("elevatorContainer");
                  elevatorContainer.style.transition = "all " + animate + "ms linear";
                  elevatorContainer.style.bottom = height + "%";
                  previous = current;
                  current = floor;
  
                  // Update data to Firebase
                  const dataRef = database.ref("televator");
                  const newData = { floor: current,
                                    previous_floor: previous 
                                  };
                  dataRef.update(newData);
  
                  setTimeout(() => {
                    document.getElementById("rightDoor").classList.add("active-right");
                    document.getElementById("leftDoor").classList.add("active-left");
                  }, animate);
                }, 3000);
              }
            }
          }
          else{
            window.alert("Weight is not entered or is inappropriate");
            compare();
          }
        });
      };

      compare();
    };

    item.addEventListener("click", handleButtonClick);
  });
});
      // Elevator Control Code Ended