let city = document.querySelector('.input');
let button = document.getElementById('search-button');
// let cityOutput = documnet.getElementById('city');
let daysOutput = document.getElementById('5-day');
const options = { method: 'GET' };

let fetchWeather = () => {
    button.addEventListener('click', fetchFunc = () => {


        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&units=imperial&appid=856e91804556ec4ae091de73a2ba434f', options)
            .then(response => response.json())
            .then(response => {
                let cityDiv = document.querySelector('#cityDiv')
                let cityName = document.createElement('h1');
                cityName.innerHTML = city.value;
                let temp = document.createElement('p');
                let wind = document.createElement('p')
                let getTemp = response.main.temp;
                let getWind = response.wind.speed;
                
                temp.innerHTML = getTemp + `°F`;
                wind.innerHTML = getWind;

                cityDiv.appendChild(cityName)
            })
            .catch(err => console.error(err));


    }
    );
}


fetchWeather();