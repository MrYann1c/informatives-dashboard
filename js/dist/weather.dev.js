"use strict";

var url = "https://api.openweathermap.org/data/2.5/weather?q=zurich&appid=00f2b6ac0fa1f49e57e3fea6384f3f79&units=metric";
wetter = document.getElementById("weather");
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  var main = data.main,
      name = data.name,
      sys = data.sys,
      weather = data.weather;
  var icon = "http://openweathermap.org/img/wn/".concat(weather[0]["icon"], "@2x.png");
  var div = document.createElement("div");
  var markup = "\n    <div class=\"weather1\">\n      <h2 class=\"location\">".concat(name, "<sup class=\"location-code\">").concat(sys.country, "</sup></h2>\n      <div class=\"temp\">").concat(Math.round(main.temp), "\xB0</div>\n    </div>\n    <div class=\"weather2\">\n        <img src=\"").concat(icon, "\" class=\"weather-icon\" alt=\"Weather Icon\">\n      <p class=\"description\">").concat(weather[0]["description"], "</p>\n    </div>\n    ");
  div.innerHTML = markup;
  wetter.appendChild(div);
});