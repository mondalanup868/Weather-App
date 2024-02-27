// const apiKey = "1b13ce3528d5156d0369711347588d49";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=dehradun&units=metric";


// async function checkWeather(){
// 	const responce = await fetch(apiUrl + `&appid = ${apiKey}`);
// 	var data = await responce.json();
	
	
// 	console.log(data);
// }
// checkWeather();

const searchBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.searchBtn');
const weatherImage = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp');
const cityElement = document.getElementById('city');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind_speed = document.querySelector('.wind');
const location_not_found = document.querySelector('.location-not-found'); 
const Weather_body = document.querySelector('.weather')
const retry = document.querySelector('.retry');


async function checkWeather (city){
	const api_key = "1b13ce3528d5156d0369711347588d49";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

	const weather_data = await fetch(`${url}`).then(response =>response.json());
	
	if(weather_data.cod ===`404`){
		location_not_found.style.display = "flex";
		Weather_body.style.display="none";
	}
	
	temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
	description.innerHTML = `${weather_data.weather[0].description}`;
	cityElement.innerHTML = `${weather_data.name}`;
	humidity.innerHTML =`${weather_data.main.humidity}%`;
	wind_speed.innerHTML =`${weather_data.wind.speed}`;

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weatherImage.src ="./assets/clouds.png";
			break;
		case 'Clear':
			weatherImage.src ="./assets/clear.png";
			break;
		case 'Rain':
			weatherImage.src ="./assets/rain.png";
			break;
		case 'Mist':
			weatherImage.src ="./assets/mist.png";
			break;
		case 'Snow':
			weatherImage.src ="./assets/snow.png";
			break;
		case 'Haze':
			weatherImage.src ="./assets/haze.png";
			break;
		case 'Smoke':
			weatherImage.src ="./assets/smoke.png";
			break;
			
			
	}


	console.log(weather_data);
}
searchBtn.addEventListener('click', ()=>{
	checkWeather(searchBox.value);
});
retry.addEventListener('click',()=>{
	location.reload();
});
checkWeather();
