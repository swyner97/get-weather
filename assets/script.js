let button = document.getElementById('search-button');
let daysOutput = document.getElementById('5-day');
let weatherApiKey = `26ddf8f43bcf591b20c4ad83cf52357c`;
let cityDiv = document.querySelector('.cityClass');
let cityName = document.createElement('h1');
let city = document.getElementById('search-input');
let form = document.querySelector('form');
let result = document.getElementById('searched-data')

const options = { method: 'GET' };

let getSearchVal = (event) => {
    event.preventDefault();
    if (!city.value) {
       return;
    }

    let searchedVal = city.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedVal}&units=imperial&appid=26ddf8f43bcf591b20c4ad83cf52357c`, options)
        .then(response => response.json())
        .then(response => {
            let searchedData = document.getElementById('searched-data')
            let temp = document.createElement('p');
            let wind = document.createElement('p');
            let getTemp = response.main.temp;
            let getWind = response.wind.speed;
            let getLon = response.coord.lon;
            let getLat = response.coord.lat;

            cityDiv.setAttribute('id', "cityDiv");
            temp.innerHTML = `Temp: ${getTemp}°F`;
            wind.innerHTML = `Wind Speed: ${getWind} MPH`;

            cityDiv.append(cityName, temp, wind);
            searchedData.append(cityDiv);

            secondFetch(getLat, getLon)
            if (typeof (Storage) !== 'undefined') {
                localStorage.setItem('city', city.value);

                let searchContainer = document.getElementById('search-history');

                let storedCity = document.createElement('button');
                storedCity.setAttribute('id', 'stored-city');
                storedCity.setAttribute('class', 'button');
                storedCity.setAttribute('value', city.value)
                storedCity.innerHTML = localStorage.getItem('city');
                searchContainer.append(storedCity);

                storedCity.addEventListener('click', storedCityFunc = () => {

                    city.value = storedCity.value;
                })
                event.preventDefault();
            };

        }).catch(err => console.error(err));
}


button.addEventListener('submit', getSearchVal)




let secondFetch = (getLat, getLon) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${getLat}&lon=${getLon}&units=imperial&exclude=minutely,houry&appid=26ddf8f43bcf591b20c4ad83cf52357c`, options)

        .then(response => response.json())
        .then(response => {

            let humidity = document.createElement('p');
            let uvIndex = document.createElement('p');
            let getHumidity = response.current.humidity;
            let getUVIndex = response.current.uvi;
            let fiveDays = document.getElementById('5-day')

            uvIndex.innerHTML = `UV Index: ${getUVIndex}`
            humidity.innerHTML = `Humidty: ${getHumidity}%`;

            cityDiv.append(cityName, humidity, uvIndex);
        
            days = moment().add(1, 'days').format('l')
            for (let i = 0; i < 7; i++) {
                let daysFormula = moment().add([i], 'days').format('l');
                let card = document.createElement('div');
                let date = document.createElement('h2');
                let dailyTemp = document.createElement('p');
                let dailyWind = document.createElement('p');
                let dailyHumidity = document.createElement('p');

                let getIcon = response.daily[i].weather[0].icon;
                let getDailyTemp = response.daily[i].temp.day;
                let getDailyWind = response.daily[i].wind_speed;
                let getDailyHumidity = response.daily[i].humidity;

                card.classList.add('is-flex', 'is-flex-direction-column', 'is-align-items-center', 'is-flex-wrap', 'card')
                dailyHumidity.innerHTML = `Humidity: ${getDailyHumidity}%`
                dailyWind.innerHTML = `Wind: ${getDailyWind} MPH`
                dailyTemp.innerHTML = `Temp: ${getDailyTemp}°F`;
                date.innerHTML = daysFormula;
                let icon = document.createElement('img');
                icon.setAttribute('src', `http://openweathermap.org/img/wn/${getIcon}.png`);
                card.append(date, icon, dailyTemp, dailyWind, dailyHumidity);
                fiveDays.append(card);
            }
        })
        .catch(err => console.error(err));
}



form.addEventListener('submit', getSearchVal)

