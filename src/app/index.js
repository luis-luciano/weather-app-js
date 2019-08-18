// Script master o main
require('./index.css');
const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');

const store =  new Store();
const { city, countryCode } = store.getLocation();
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeather() {
    const data = await weather.getWeather();

    if(typeof data !== 'undefined'){
        ui.render(data); 
    }
}

document.addEventListener('DOMContentLoaded', fetchWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault(); 
  weather.setLocation(ui.getInput('city'), ui.getInput('countryCode'));
  fetchWeather();  
});
