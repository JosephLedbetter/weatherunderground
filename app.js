const storage = new Storage()

//get stored location data
const weatherLocation = storage.getLocationData()

//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country)

//init ui
const ui = new UI()

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)

//change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
