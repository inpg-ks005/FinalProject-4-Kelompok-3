const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            result.innerHTML = `<h2 style="margin-bottom: 15px; color: #ffffff;">${response.name}, ${response.sys.country}</h2>
                                <h5 style="color: #ffffff;">Conditions : <span class="temp">${response.weather[0].description}</span></h5>
                                <h5 style="color: #ffffff;">Temperature : <span class="temp">${response.main.temp}°С</span></h5>
                                <p style="margin-bottom: 17px; color: #ffffff;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5 style="color: #ffffff;">Wind Speed : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px; color: #ffffff;">Clouds : ${response.clouds.all}%</h5>`
                                 
        })
    inputKeyword.value = null;

})