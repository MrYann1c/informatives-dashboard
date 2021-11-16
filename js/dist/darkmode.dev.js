"use strict";

function Check() {
  var status = document.getElementById("darkmode-status");

  if (status.innerHTML == "ON") {
    status.innerHTML = "OFF";
    status.style.color = "red";
    localStorage.clear();
    DarkMode();
  } else {
    status.innerHTML = "ON";
    status.style.color = "lightgreen";
    localStorage.setItem('DarkMode', 'True');
    DarkMode();
  }
}

function DarkMode() {
  // Select elements
  var status = document.getElementById("darkmode-status");
  var html = document.getElementById("html");
  var body = document.getElementById("body");
  var section = document.querySelectorAll(".section");
  var innersec = document.querySelectorAll(".function-inner");
  var footer = document.getElementById("footer");
  var logo = document.getElementById("logo"); // ----- DARKMODE -----

  if (localStorage.getItem('DarkMode') != null) {
    status.innerHTML = "ON";
    status.style.color = "lightgreen"; // Background color

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
    // Background color
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
}

if (localStorage.getItem('DarkMode') != null) {
  DarkMode();
} else {
  localStorage.clear();
}