let city = document.querySelector('input');
let button = document.getElementById('search-button');
// let cityOutput = documnet.getElementById('city');
let daysOutput = document.getElementById('5-day')



// let consoleStuff = () => {
//     console.log(searchVal.value);
// }

// button.addEventListener('click', consoleStuff)

const options = { method: 'GET' };

let fetchFunc = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=06f216875a2540097378a73527e9598f', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


let fetchWeather = () => {
    button.addEventListener('click', fetchFunc);
}

fetchWeather();