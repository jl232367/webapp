//import * as weatherApiInfo from "./jsmods/apirequest";
const api = "c0cb2ed6b02d22efdde40b0bedf9268e";
const zip = 37604;
// function to get the weather by zipcode
const getWeatherByZip = async (zipCode) => {
    const requestByZip = "http://api.openweathermap.org/data/2.5/weather?q=" + zip + "&appid=" + api; 
    try {
        const response = await fetch(requestByZip);
        const weatherData = await response.json();
        return console.log(weatherData);
    } catch(err) {
        alert(err);
    }
}

//weatherApiInfo.getWeatherByZip(37604);