let button = document.getElementById('search-button');
let daysOutput = document.getElementById('5-day');
let weatherApiKey = `26ddf8f43bcf591b20c4ad83cf52357c`;
let cityDiv = document.querySelector('.cityClass');
let cityName = document.createElement('h1');
let city = document.getElementById('search-input');
let form = document.querySelector('form');


const options = { method: 'GET' };

let getSearchVal = (event) => {
    event.preventDefault();
    if (!city.value) {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&appid=26ddf8f43bcf591b20c4ad83cf52357c`, options)
        .then(response => response.json())
        .then(response => {
            let cityName = document.querySelector('.current-city');
           
            let temp = document.querySelector('.current-temp');
            let wind = document.querySelector('.current-wind');
            let getTemp = response.main.temp;
            let getWind = response.wind.speed;
            let getLon = response.coord.lon;
            let getLat = response.coord.lat;

            temp.innerHTML = `Temp: ${getTemp}°F`;
            wind.innerHTML = `Wind Speed: ${getWind} MPH`;
            cityName.innerHTML = city.value;
            
            cityDiv.append(cityName, temp, wind);
            

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

        }).catch(err => 
                {alert('Check Spelling!')});
}

button.addEventListener('submit', getSearchVal)

let secondFetch = (getLat, getLon) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${getLat}&lon=${getLon}&units=imperial&exclude=minutely,houry&appid=26ddf8f43bcf591b20c4ad83cf52357c`, options)

        .then(response => response.json())
        .then(response => {

            let humidity = response.current.humidity;
            let uvi = response.current.uvi;
            let humidityEl = document.querySelector('.current-humidity');
            let uviEl= document.querySelector('.current-UV');

            humidityEl.innerHTML = `Humidity: ${humidity}`;
            uviEl.innerHTML = `UV Index: ${uvi}`;

            cityDiv.append(uviEl, humidityEl);

            //     ICONS
            let getDay1Icon = response.daily[0].weather[0].icon;
            let getDay2Icon = response.daily[1].weather[0].icon;
            let getDay3Icon = response.daily[2].weather[0].icon;
            let getDay4Icon = response.daily[3].weather[0].icon;
            let getDay5Icon = response.daily[4].weather[0].icon;
            let getDay6Icon = response.daily[5].weather[0].icon;
            let getDay7Icon = response.daily[6].weather[0].icon;
       
            let day1Icon = document.querySelector('.day1-img')
            let day2Icon = document.querySelector('.day2-img')
            let day3Icon = document.querySelector('.day3-img')
            let day4Icon = document.querySelector('.day4-img')
            let day5Icon = document.querySelector('.day5-img')
            let day6Icon = document.querySelector('.day6-img')
            let day7Icon = document.querySelector('.day7-img')

            day1Icon.setAttribute('src', `https://openweathermap.org/img/wn/${getDay1Icon}.png`);
            day2Icon.setAttribute('src', `https://openweathermap.org/img/wn/${getDay2Icon}.png`);
            day3Icon.setAttribute('src', `https://openweathermap.org/img/wn/${getDay3Icon}.png`);
            day4Icon.setAttribute('src', `https://openweathermap.org/img/wn/${getDay4Icon}.png`);
            day5Icon.setAttribute('src', `https://openweathermap.org/img/wn/${getDay5Icon}.png`);
            day6Icon.setAttribute('src', `https://openweathermap.org/img/wn/${getDay6Icon}.png`);
            day7Icon.setAttribute('src', `https://openweathermap.org/img/wn/${getDay7Icon}.png`);

            //      TEMP
            let getDay1Temp = response.daily[0].temp.day;
            let getDay2Temp = response.daily[1].temp.day;
            let getDay3Temp = response.daily[2].temp.day;
            let getDay4Temp = response.daily[3].temp.day;
            let getDay5Temp = response.daily[4].temp.day;
            let getDay6Temp = response.daily[5].temp.day;
            let getDay7Temp = response.daily[6].temp.day;

            let day1Temp = document.querySelector('.day1-temp');
            let day2Temp = document.querySelector('.day2-temp');
            let day3Temp = document.querySelector('.day3-temp');
            let day4Temp = document.querySelector('.day4-temp');
            let day5Temp = document.querySelector('.day5-temp');
            let day6Temp = document.querySelector('.day6-temp');
            let day7Temp = document.querySelector('.day7-temp');

            day1Temp.innerHTML = getDay1Temp;
            day2Temp.innerHTML = getDay2Temp;
            day3Temp.innerHTML = getDay3Temp;
            day4Temp.innerHTML = getDay4Temp;
            day5Temp.innerHTML = getDay5Temp;
            day6Temp.innerHTML = getDay6Temp;
            day7Temp.innerHTML = getDay7Temp;

            let getDay1Wind = response.daily[0].wind_speed;
            let getDay2Wind = response.daily[1].wind_speed;
            let getDay3Wind = response.daily[2].wind_speed;
            let getDay4Wind = response.daily[3].wind_speed;
            let getDay5Wind = response.daily[4].wind_speed;
            let getDay6Wind = response.daily[5].wind_speed;
            let getDay7Wind = response.daily[6].wind_speed;

            let day1Wind = document.querySelector('.day1-wind');
            let day2Wind = document.querySelector('.day2-wind');
            let day3Wind = document.querySelector('.day3-wind');
            let day4Wind = document.querySelector('.day4-wind');
            let day5Wind = document.querySelector('.day5-wind');
            let day6Wind = document.querySelector('.day6-wind');
            let day7Wind = document.querySelector('.day7-wind');

            day1Wind.innerHTML = getDay1Wind;
            day2Wind.innerHTML = getDay2Wind;
            day3Wind.innerHTML = getDay3Wind;
            day4Wind.innerHTML = getDay4Wind;
            day5Wind.innerHTML = getDay5Wind;
            day6Wind.innerHTML = getDay6Wind;
            day7Wind.innerHTML = getDay7Wind;

            let getDay1Humidity = response.daily[0].humidity;
            let getDay2Humidity = response.daily[1].humidity;
            let getDay3Humidity = response.daily[2].humidity;
            let getDay4Humidity = response.daily[3].humidity;
            let getDay5Humidity = response.daily[4].humidity;
            let getDay6Humidity = response.daily[5].humidity;
            let getDay7Humidity = response.daily[6].humidity;

            let day1Humidity = document.querySelector('.day1-humidity');
            let day2Humidity = document.querySelector('.day2-humidity');
            let day3Humidity = document.querySelector('.day3-humidity');
            let day4Humidity = document.querySelector('.day4-humidity');
            let day5Humidity = document.querySelector('.day5-humidity');
            let day6Humidity = document.querySelector('.day6-humidity');
            let day7Humidity = document.querySelector('.day7-humidity');

            day1Humidity.innerHTML = getDay1Humidity;
            day2Humidity.innerHTML = getDay2Humidity;
            day3Humidity.innerHTML = getDay3Humidity;
            day4Humidity.innerHTML = getDay4Humidity;
            day5Humidity.innerHTML = getDay5Humidity;
            day6Humidity.innerHTML = getDay6Humidity;
            day7Humidity.innerHTML = getDay7Humidity;
        })
        .catch(err => console.error(err));
}



form.addEventListener('submit', getSearchVal)

