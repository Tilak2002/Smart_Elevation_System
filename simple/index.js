let current = 0;

document.addEventListener("DOMContentLoaded", function () {
  const floorListItems = document.querySelectorAll(".number .btn");

  floorListItems.forEach((item) => {
    const handleButtonClick = function () {
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

        setTimeout(() => {
          document.getElementById("rightDoor").classList.add("active-right");
          document.getElementById("leftDoor").classList.add("active-left");
        }, animate);
      }, 5000);
    };

    item.addEventListener("click", handleButtonClick);

    return () => {
      item.removeEventListener("click", handleButtonClick);
    };
  });
});


// this below is for template js

// var current = 0;

// document.addEventListener("DOMContentLoaded", function () {
//     var floorListItems = document.querySelectorAll("#floorSelect li");
//     // var floorListItems = document.querySelectorAll("#floorSelect li");

//     floorListItems.forEach(function (item) {
//         item.addEventListener("click", function () {
//             var floor = parseInt(this.getAttribute("data-floor"));
//             var height = floor * 20;
//             var animate = Math.abs(current - floor) * 1000;

//             if (floor === current) return;

//             document.getElementById("rightDoor").classList.remove("active-right");
//             document.getElementById("leftDoor").classList.remove("active-left");

//             setTimeout(function () {
//                 var elevatorContainer = document.getElementById("elevatorContainer");
//                 elevatorContainer.style.transition = "all " + animate + "ms linear";
//                 elevatorContainer.style.bottom = height + "%";
//                 current = floor;

//                 setTimeout(function () {
//                     document.getElementById("rightDoor").classList.add("active-right");
//                     document.getElementById("leftDoor").classList.add("active-left");
//                 }, animate);

//             }, 300);
//         });
//     });
// });




// var current = 0;
// $(document).ready(function () {

//     $("#floorSelect li").click(function () {

//         var floor = parseInt($(this).data("floor")),
//             height = floor * 20,
//             animate = Math.abs(current - floor) * 1000;
//         if (floor == current) return;
//         $("#rightDoor").removeClass("active-right");
//         $("#leftDoor").removeClass("active-left");
//         setTimeout(function () {
//             $("#elevatorContainer").css("transition", "all " + animate + "ms linear");
//             $("#elevatorContainer").css("bottom", height + "%");
//             current = floor;
//             setTimeout(function () {

//                 $("#rightDoor").addClass("active-right");
//                 $("#leftDoor").addClass("active-left");

//             }, animate);
//         }, 300);
//     });

// });