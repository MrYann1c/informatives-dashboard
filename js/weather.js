const url = `https://api.openweathermap.org/data/2.5/weather?q=zurich&appid=00f2b6ac0fa1f49e57e3fea6384f3f79&units=metric`;
wetter = document.getElementById("weather");

fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `http://openweathermap.org/img/wn/${
      weather[0]["icon"]
    }@2x.png`;

    const div = document.createElement("div");
    const markup = `
    <div class="weather1">
      <h2 class="location">${name}<sup class="location-code">${sys.country}</sup></h2>
      <div class="temp">${Math.round(main.temp)}°</div>
    </div>
    <div class="weather2">
        <img src="${icon}" class="weather-icon" alt="Weather Icon">
      <p class="description">${weather[0]["description"]}</p>
    </div>
    `;
    div.innerHTML = markup;
    wetter.appendChild(div);
  });
