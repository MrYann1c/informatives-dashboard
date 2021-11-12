const url = `https://api.openweathermap.org/data/2.5/weather?q=zürich&appid=00f2b6ac0fa1f49e57e3fea6384f3f79&units=metric`;

wetter = document.getElementById("weather");

fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
    //   weather[0]["icon"]
    // }.svg`;

    const div = document.createElement("div");
    // li.classList.add("city");
    const markup = `
    <div class="weather1">
      <h2 class="location">${name}<sup class="location-code">${sys.country}</sup></h2>
      <div class="temp">${Math.round(main.temp)}°</div>
    </div>
    <div class="weather2">
      <img src="img/04d.svg" class="weather-icon" alt="Weather Icon">
      <p class="description">${weather[0]["description"]}</p>
    </div>
    `;
    div.innerHTML = markup;
    wetter.appendChild(div);
  });
