// when a user searches for a city(example: New York), it should display the name of the city on the result page and the current temperature of the city.

// Show temperature for city responding to input & API
function showTemperature(response) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperatureValue = Math.round(response.data.main.temp);
    temperatureElement.innerHTML = `${temperatureValue}`;
    let city = document.querySelector("#city-input").value;
    let cityName = document.querySelector("#selected-city");
    cityName.innerHTML = `${city}`;
}

// Select city regarding API
function showCity(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
}

// Make active Search input
let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", showCity);



// BONUS - Add a Current Location button & add current TEMP & CITY name
function showPossitionWeather(response) {
    event.preventDefault();
    let tempCurrent = document.querySelector("#temperature");
    let temperatureValue = Math.round(response.data.main.temp);
    tempCurrent.innerHTML = `${temperatureValue}`;
    let cityCurrent = document.querySelector("#selected-city");
    cityCurrent.innerHTML = `${response.data.name}`;
}

function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showPossitionWeather);
}

function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
}

let locationElement = document.querySelector("#location-current");
locationElement.addEventListener("click", getCurrentPosition);