let city = document.querySelector('#search-input');
let button = document.getElementById('search-button');
// let cityOutput = documnet.getElementById('city');
let daysOutput = document.getElementById('5-day');
const options = { method: 'GET' };


button.addEventListener('click', fetchFunc = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=26ddf8f43bcf591b20c4ad83cf52357c', options)
        .then(response => response.json())
        .then(response => {
            let cityDiv = document.querySelector('#cityDiv');
            let cityName = document.createElement('h1');
            cityName.innerHTML = city.value;
            let temp = document.createElement('p');
            let wind = document.createElement('p');
            let getTemp = response.main.temp;
            let getWind = response.wind.speed;
            let getLon = response.coord.lon;
            let getLat = response.coord.lat;

            temp.innerHTML = `Temp: ${getTemp}°F`;
            wind.innerHTML = `Wind Speed: ${getWind} MPH`;

            // cityDiv.append(cityName, temp, wind)

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${getLat}&lon=${getLon}&units=imperial&exclude=minutely,houry&appid=26ddf8f43bcf591b20c4ad83cf52357c`, options)

                .then(response => response.json())
                .then(response => {

                    let humidity = document.createElement('p');
                    let uvIndex = document.createElement('p');
                    let getHumidity = response.current.humidity;
                    let getUVIndex = response.current.uvi;

                    uvIndex.innerHTML = `UV Index: ${getUVIndex}`
                    humidity.innerHTML = `Humidty: ${getHumidity}%`;

                    cityDiv.append(cityName, temp, wind, humidity, uvIndex)
                })
        })
        .catch(err => console.error(err));


}
);
