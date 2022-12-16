const searchButton = document.querySelector("#button-addon2");
const inputKeyword = document.querySelector(".input-keyword");
document.body.style.backgroundImage = "url(img/langit.jpg)";

searchButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputKeyword.value +
      "&appid=00e64e3fcf3bef62180931b5dbf504cb&units=metric"
  )
    .then((response) => response.json())
    .then((response) => {
      let result = document.querySelector(".result");

      result.innerHTML = `<h2 style="margin-bottom: 15px; color: #00ff00;">City : ${response.name}</h2>
                            <h6 style="color: #00ff00;">Condition : ${response.weather[0].description}</span></h6>
                            <h6 style="color: #00ff00;">Temperature : ${response.main.temp}°С</span></h6>                       
                            <h6 style="color: #00ff00;">Wind Speed : ${response.wind.speed} m/s</h6>`;
    });
  inputKeyword.value = null;
});
