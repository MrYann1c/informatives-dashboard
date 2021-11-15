"use strict";

function ticken() {
  uhr = document.getElementById("clock"); // sec = document.getElementById("sec");

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

  sekunden = "<span id='sec'>" + sekunden + "</span>";
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
    $reminder = "Hände bitte regelmässig desinfizieren!";
    daily.innerHTML = $reminder;
  }

  window.setTimeout("ticken();", 1000);
}

window.onload = ticken;