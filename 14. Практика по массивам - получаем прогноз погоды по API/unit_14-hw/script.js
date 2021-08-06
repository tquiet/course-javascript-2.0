const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": "321be3838e765fe937e8ef7516e4c4d8"
}
const cities = {
  2643743: "London",
  2950159: "Berlin",
  703448: "Kyiv",
  702550: "Lviv",
  756135: "Warsaw",
}

function getWeather() {
  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
      return weather.json();
    }).then(showWeather);
}

function showWeather(data) {
  console.log(data);
  document.querySelector('.city-name').textContent = data.name;
  document.querySelector('.city-temp').innerHTML = Math.round(data.main.temp) + '&deg';
  document.querySelector('.city-weather__descr').innerHTML = data.weather[0]['description'];
  document.querySelector('.city-wind').innerHTML = data.wind.speed + ' m/s';
  document.querySelector('.city-humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.city-pressure').innerHTML = data.main.pressure + 'hPa';

  document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

function addSellect() {
  let out = document.querySelector('.out')
  let selectElement = document.createElement('select');
  let optionElement = '';

  selectElement.setAttribute('id', 'city');
  out.append(selectElement);

  for (let key in cities) {
    optionElement = document.createElement('option');
    selectElement.append(optionElement);
    optionElement.value = key;
    optionElement.innerHTML = cities[key]
  }

}

addSellect()
getWeather();
document.querySelector('#city').onchange = getWeather;