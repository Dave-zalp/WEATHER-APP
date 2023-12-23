const ApiKey = '0a69188ecf47beb4a7b50e71f03db91d';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherDiv = document.querySelector('.weather');

const ApiUrl = `https://api.openweathermap.org/data/2.5/weather`;

async function checkweather(city){
    const response = await fetch(ApiUrl + `?q=${city}` + `&appid=${ApiKey}`);
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
    }
   else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }
   else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png';
    }
   else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }
   else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }
    
    
}

searchBtn.addEventListener('click', ()=>{
    checkweather(searchBox.value);
    weatherDiv.style.display = 'block';
})

