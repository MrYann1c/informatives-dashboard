"use strict";

function PreDark() {
  var status = document.getElementById("darkmode-status");

  if (status.innerHTML == "OFF") {
    // Set localStorage to stay in DarkMode & Check
    status.innerHTML = "ON";
    status.style.color = "lightgreen";
    DarkMode();
  } else if (window.localStorage.getItem('DarkMode') != null) {
    // Clear localStorage
    status.innerHTML = "ON";
    status.style.color = "lightgreen";
    DarkMode();
  } else if (status.innerHTML == "ON" || window.localStorage.getItem('DarkMode') == null) {
    window.localStorage.clear();
    status.innerHTML = "OFF";
    status.style.color = "red";
    DarkMode();
  }
}

function DarkMode() {
  // Select elements
  var html = document.getElementById("html");
  var body = document.getElementById("body");
  var section = document.querySelectorAll(".section");
  var innersec = document.querySelectorAll(".function-inner");
  var footer = document.getElementById("footer");
  var logo = document.getElementById("logo"); // ----- DARKMODE -----

  if (localStorage.getItem('DarkMode') != null) {
    // Background color
    html.style.backgroundColor = "#565656";
    body.style.backgroundColor = "#565656";
    footer.style.backgroundColor = "#565656";

    for (i = 0; i < section.length; i++) {
      section[i].style.backgroundColor = "#565656";
    } // Change logo color


    logo.style.filter = "brightness(100)"; // Change text color in general

    body.style.color = "#FFFFFF"; // Change text color inside Sections

    for (i = 0; i < innersec.length; i++) {
      innersec[i].style.color = "#FFFFFF";
    } // ----- LIGHTMODE -----

  } else {
    window.localStorage.clear(); // Background color

    html.style.backgroundColor = "#FFFFFF";
    body.style.backgroundColor = "#FFFFFF";
    footer.style.backgroundColor = "#FFFFFF";

    for (i = 0; i < section.length; i++) {
      section[i].style.backgroundColor = "#FFFFFF";
    } // Change logo color


    logo.style.filter = "none"; // Change text color in general

    body.style.color = "#565656"; // Change text color inside Sections

    for (i = 0; i < innersec.length; i++) {
      innersec[i].style.color = "#565656";
    }
  }
} // PreDark();