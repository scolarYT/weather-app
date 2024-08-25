const apikey = "add3123973ff774c3905e6f0076d0b73";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city) {
  const responce = await fetch(apiurl + city + `&appid=${apikey}`);

  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await responce.json();

    let cityName = data.name;
    let cityTemp = Math.round(data.main.temp) + "°C";
    let cityHumidity = data.main.humidity + "%";
    let cityWind = data.wind.speed + " km/h";

    document.querySelector(".city").innerHTML = cityName;
    document.querySelector(".temp").innerHTML = cityTemp;
    document.querySelector(".humidity").innerHTML = cityHumidity;
    document.querySelector(".wind").innerHTML = cityWind;
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
