const key = "cf94422d70dbf7f804974bdd1a49b65d";

const cName = document.querySelector("#city");
const weathers = document.querySelector("#weathers");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return weather_data(data);
};
getWeather(city);

const weather_data = (data) => {

  weathers.innerHTML = `
    <p id="result">Temperature:${data.main.temp}C</p>
    <p id="result">${data.weather[0].main}</p>
    `;
};

document.getElementById("submit").addEventListener("click", myFunction);
function myFunction(e) {
  e.preventDefault();
  getWeather(cName.value);
}
