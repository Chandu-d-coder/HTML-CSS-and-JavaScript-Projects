// API key and URL for fetching weather data
const api_key = "832c0aecb74095166f8f402f78387aaf";
const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// DOM elements
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");
const weatherDiv = document.getElementById("weather");
const tempSituationDiv = document.getElementById("temp-sitiation");

// Function to fetch weather data for a given city
async function checkWeather(check_city) {
  // Fetch weather data from API
  const response = await fetch(URL + check_city + `&appid=${api_key}`);
  const data = await response.json();

  // Update DOM elements with weather data
  temp.innerHTML = Math.round(data.main.temp) + "°c";
  city.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + " %";
  wind.innerHTML = data.wind.speed + "  km/hr";
  weatherDiv.classList.remove("hide");
  tempSituationDiv.classList.remove("hide");

  // Set weather icon based on weather condition
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
  // Call checkWeather function with the value from search input
  checkWeather(searchBox.value);
});
