const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key = "b9fa4ff81a1bd9fa24f2053a4649345b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;

humidity.innerHTML =`${weather_data.main.humidity}%`;
wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;

switch(weather_data.weather[0].main){
    case 'Clouds' :
         weather_img.src = "/assets/cloud.png.png";
    break;
    case 'Clear' :
         weather_img.src = "/assets/clear.png.png";
    break;
    case 'Rain' :
         weather_img.src = "/assets/Rain.png.png";
    break;
    case 'Mist' :
         weather_img.src = "/assets/mist.png";
    break;
    case 'Snow' :
         weather_img.src = "/assets/snow.png";
    break;
    
   
    

}

console.log(weather_data);
}



searchbtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

