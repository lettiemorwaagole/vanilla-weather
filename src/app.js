function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperatureid");
    temperatureElement.innerHTML=Math.round(response.data.temperature.current);
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.city;
    let descriptionElement=document.querySelector("#description");
    descriptionElement.innerHTML=response.data.condition.description;
    let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML=response.data.temperature.humidity;
    let windElement=document.querySelector("#wind");
    windElement.innerHTML=Math.round(response.data.wind.speed);

}

let apiKey = "f2a194ebftba7cf780c1718655ff3do3";
let apiUrl ='https://api.shecodes.io/weather/v1/current?query=Gaborone&key=f2a194ebftba7cf780c1718655ff3do3&units=metric';

axios.get(apiUrl).then(displayTemperature);