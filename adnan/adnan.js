const city = document.querySelector("#city");
const conditions = document.querySelector("#conditions");
const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#windspeed");

const input = document.querySelector("#input");
const button = document.querySelector("#button");

async function weather(event) {
  const BASE_URL = "https://aerisweather1.p.rapidapi.com/forecasts/cairo,eg";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3d917a946dmshff0081340c31504p13cc00jsn7aab6792fca6",
      "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  console.log(data.response);

  if (data.response.length) {
    const dataResponse = data.response[0];

    console.log(dataResponse);
    city.innerText = dataResponse.place.name;
    conditions.innerText = dataResponse.periods[0].weather;
    temperature.innerText = dataResponse.periods[0].avgTempC + " C";
    windSpeed.innerText = dataResponse.periods[0].windSpeedKPH + " kmh";
  }

  event.preventDefault();
}

console.log(weather());

button.addEventListener("click", weather, false);

// weather().catch((err) => console.log(err));

// const coba = async () => {};

// fetch("https://aerisweather1.p.rapidapi.com/forecasts/cairo,eg", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
