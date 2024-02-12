function searchWeather() {
    const apiKey = 'c8528183ccdc40db88e151508241202';
    const cityInput = document.getElementById('cityInput').value;

const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}`;

fetch(apiUrl, {mode: 'cors'})
.then(function(response) {
    return response.json();
  })
  .then(data => {
    showWeather(data);
  });

}

function showWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const weatherHTML = `
        <p>Clima en </p><h2> ${data.location.name}, ${data.location.country}</h2>
        <p>Temperatura <b>${data.current.temp_c}°C</b></p>
        <p>Descripción <b>${data.current.condition.text}</b></p>
        <p>Humedad <b>${data.current.humidity}%</b></p>
        <p>Viento <b>${data.current.wind_kph} k/h</b></p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}