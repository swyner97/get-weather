let city = document.querySelector('#search-input');
let button = document.getElementById('search-button');
// let cityOutput = documnet.getElementById('city');
let daysOutput = document.getElementById('5-day');
let weatherApiKey = `26ddf8f43bcf591b20c4ad83cf52357c`;
// let citySearch = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;
// let coordinateSearch = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;

const options = { method: 'GET' };
button.addEventListener('click', fetchFunc = () => {

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=26ddf8f43bcf591b20c4ad83cf52357c', options)
        .then(response => response.json())
        .then(response => {
            let cityDiv = document.querySelector('#cityDiv')
            let cityName = document.createElement('h1');
            cityName.innerHTML = city.value;
            let temp = document.createElement('p');
            let wind = document.createElement('p');
            let humidity = document.createElement('p')
            let getTemp = response.main.temp;
            let getWind = response.wind.speed;
            let getHumidity = response.main.humidity
            let lat = response.coord.lat;
            let lon = response.coord.lon;

            temp.innerHTML = `Temp: ${getTemp}°F`;
            wind.innerHTML = `Wind: ${getWind}`;
            humidity.innerHTML = `Humidty: ${getHumidity}`


            cityDiv.append(cityName, temp, wind, humidity);
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=26ddf8f43bcf591b20c4ad83cf52357c`, options)
                .then(response => response.json())
                .then(response => {
                    let uvIndex = document.createElement('p');
                    let getUVIndex = response.current.uvi;
                    let cards = document.createElement('div');
                    let cardImg = response.daily[i].weather.icon;
                    let imgDiv = document.createElement('div');

                    imgDiv.classList.add('card-image')
                    cards.classList.add('card')
                    uvIndex.innerHTML = `UV Index: ${getUVIndex}`

                    imgDiv.append(cardImg)
                    cards.append(imgDiv)
                    cityDiv.append(uvIndex)

                })
        })
        .catch(err => console.error(err));


}, { once: true }
);




// let getLatLon = () => {
//     button.addEventListener('click', fetchReq = () => {
//         fetch(`https://api.openweathermap.org/geo/1.0/direct?q=` + city.value + `&limit=5&appid=26ddf8f43bcf591b20c4ad83cf52357c`, options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//     }) 

// }

// getLatLon();

// fetchWeather();

