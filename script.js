// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'RapidAPI-Key': 'e7ecb2eb70mshbbfc7a963eb723cp1310c4jsn1c94a0fbbc13',

// 	}
// };

// async function main() {

// 	const response = await fetch(url, options);
// 	const weatherData = await response.json();
// 	console.log(weatherData);
// 	updateWeather(weatherData);

// }


// function updateWeather(weatherData) {
// 	const temperature = weatherData.temp;
// 	const minTemperature = weatherData.min_temp;
// 	const maxTemperature = weatherData.max_temp;

// 	const temperatureElement = document.getElementById('temperature');
// 	const minTemperatureElement = document.getElementById('min-temperature');
// 	const maxTemperatureElement = document.getElementById('max-temperature');

// 	temperatureElement.textContent = `tempterature: ${temperature}°C`;
// 	minTemperatureElement.textContent = `min-temp: ${minTemperature}°C`;
// 	maxTemperatureElement.textContent = `max-temp: ${maxTemperature}°C`;

// 	const wind_speed = weatherData.wind_speed;
// 	const wind_degrees = weatherData.wind_degrees;
// 	const sunset = weatherData.sunset;

// 	const wind_speedElement = document.getElementById('wind_speed');
// 	const wind_degreesElement = document.getElementById('wind_degrees');
// 	const sunriseElement = document.getElementById('sunrise');

// 	wind_speedElement.textContent = `wind speed: ${wind_speed }°C`;
// 	wind_degreesElement.textContent = `wind_degrees: ${wind_degrees}°C`;
// 	sunriseElement.textContent = `sunrise: ${sunset}°C`;




//   }

// main()


const apiKey = 'e7ecb2eb70mshbbfc7a963eb723cp1310c4jsn1c94a0fbbc13';

async function searchWeather() {
  const cityInput = document.getElementById('cityInput').value;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityInput}`;
  const options = {
    method: 'GET',
    headers: {
      'RapidAPI-Key': apiKey,
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const weatherData = await response.json();
    console.log(weatherData);
    updateWeather(weatherData, cityInput);
  } catch (error) {
    console.log(error);
  }
}

function updateWeather(weatherData, city) {
  document.getElementById('cityHeader').textContent = `Temperature for ${city}`;
  const feels_like = weatherData.feels_like;
  const minTemperature = weatherData.min_temp;
  const maxTemperature = weatherData.max_temp;

  const feels_likeElement = document.getElementById('feels_like');
  const minTemperatureElement = document.getElementById('min-temperature');
  const maxTemperatureElement = document.getElementById('max-temperature');

  feels_likeElement.textContent = `Feels like: ${feels_like}°C`;
  minTemperatureElement.textContent = `Min Temperature: ${minTemperature}°C`;
  maxTemperatureElement.textContent = `Max Temperature: ${maxTemperature}°C`;

  const humidity = weatherData.humidity;
  const cloud_pct = weatherData.cloud_pct;
  const sunset = weatherData.sunset;

  const humidityElement = document.getElementById('humidity');
  const cloud_pctElement = document.getElementById('cloud_pct');
  const sunsetElement = document.getElementById('sunset');

  humidityElement.textContent = `humidity: ${humidity}°C`;
  cloud_pctElement.textContent = `cloud_pct: ${cloud_pct}°C`;
  sunsetElement.textContent = `sunset: ${sunset} lattitudes`;


  const wind_speed = weatherData.wind_speed;
  const wind_degrees = weatherData.wind_degrees;
  const sunrise = weatherData.sunrise;

  const wind_speedElement = document.getElementById('wind_speed');
  const wind_degreesElement = document.getElementById('wind_degrees');
  const sunriseElement = document.getElementById('sunrise');

  wind_speedElement.textContent = `wind speed: ${wind_speed}Km/hr`;
  wind_degreesElement.textContent = `wind degrees: ${wind_degrees}°C`;
  sunriseElement.textContent = `sunrise : ${sunrise} longitudes`;
}