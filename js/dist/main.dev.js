"use strict";

var url = "https://api.openweathermap.org/data/2.5/weather?q=zurich&appid=00f2b6ac0fa1f49e57e3fea6384f3f79&units=metric";
wetter = document.getElementById("weather");
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  var main = data.main,
      name = data.name,
      sys = data.sys,
      weather = data.weather; // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
  //   weather[0]["icon"]
  // }.svg`;

  var div = document.createElement("div");
  var markup = "\n    <div class=\"weather1\">\n      <h2 class=\"location\">".concat(name, "<sup class=\"location-code\">").concat(sys.country, "</sup></h2>\n      <div class=\"temp\">").concat(Math.round(main.temp), "\xB0</div>\n    </div>\n    <div class=\"weather2\">\n      <img src=\"img/04d.svg\" class=\"weather-icon\" alt=\"Weather Icon\">\n      <p class=\"description\">").concat(weather[0]["description"], "</p>\n    </div>\n    "); // if (${weather[0]["description"]} = "")

  div.innerHTML = markup;
  wetter.appendChild(div);
});

function ticken() {
  uhr = document.getElementById("clock");
  daily = document.getElementById("reminder");
  var stunden, minuten, sekunden;
  var StundenZahl, MinutenZahl, SekundenZahl;
  var heute;
  heute = new Date();
  StundenZahl = heute.getHours();
  MinutenZahl = heute.getMinutes();
  SekundenZahl = heute.getSeconds();
  stunden = StundenZahl + ":";

  if (MinutenZahl < 10) {
    minuten = "0" + MinutenZahl + ":";
  } else {
    minuten = MinutenZahl + ":";
  }

  if (SekundenZahl < 10) {
    sekunden = "0" + SekundenZahl + " ";
  } else {
    sekunden = SekundenZahl + " ";
  }

  zeit = stunden + minuten + sekunden;
  uhr.innerHTML = zeit; // Daily Reminders

  if (zeit > "15:45:00") {
    $reminder = "Zeiterfassung und Wordpress erledigen!";
    daily.innerHTML = $reminder;
  } else if (zeit > "13:00:00" && zeit < "15:45:00") {
    $reminder = "Stay hydrated!";
    daily.innerHTML = $reminder;
  } else if (zeit > "6:00:00" && zeit < "8:00:00") {
    $reminder = "Vergiss deine Maske nicht!";
    daily.innerHTML = $reminder;
  } else {
    $reminder = "Vergiss deine Maske nicht!";
    daily.innerHTML = $reminder;
  }

  window.setTimeout("ticken();", 1000);
}

window.onload = ticken;

function darkmode() {
  $header = "";
}