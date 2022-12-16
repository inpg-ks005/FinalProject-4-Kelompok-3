const city = document.querySelector("#city");
const conditions = document.querySelector("#conditions");
const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windspeed");

const input = document.querySelector("#input");
const button = document.querySelector("#button");

async function myFunction() {
  const weather = {
    apiKey: "f3e751dcc8a8bf71bbe354f812e24bd4",
  };

  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${weather.apiKey}&units=metric`;

  const response = await fetch(BASE_URL);
  const data = await response.json();

  console.log(data);

  city.innerText = data.name;
  conditions.innerText = data.weather[0].description;
  temperature.innerText = data.main.temp + " C";
  windSpeed.innerText = data.wind.speed + " ms";
}

button.addEventListener("click", (event) => {
  console.log(myFunction());
  event.preventDefault();
});
