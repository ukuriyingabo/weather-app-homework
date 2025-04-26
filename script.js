const API_URL = 'https://goweather.herokuapp.com/weather/';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherCard = document.getElementById('weatherCard');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const wind = document.getElementById('wind');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');
const errorMessage = document.getElementById('errorMessage');
const previousSearches = document.getElementById('previousSearches');

searchButton.addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        showError('Please enter a city name.');
        return;
    }

    try {
        const response = await fetch(API_URL + city);
        const data = await response.json();

        if (!data.temperature) {
            showError('City not found or API returned no data.');
            return;
        }

        displayWeather(data, city);
        saveSearch(city);
    } catch (error) {
        showError('Something went wrong. Try again later.');
        console.error(error);
    }
}

function displayWeather(data, city) {
    errorMessage.classList.add('hidden');
    weatherCard.classList.remove('hidden');

    cityName.textContent = city;
    temperature.textContent = `Temperature: ${data.temperature}`;
    wind.textContent = `Wind: ${data.wind}`;
    description.textContent = `Description: ${data.description}`;

    // Set background color
    const tempValue = parseInt(data.temperature);
    if (tempValue <= 15) {
        weatherCard.style.backgroundColor = 'blue';
    } else if (tempValue >= 16 && tempValue <= 25) {
        weatherCard.style.backgroundColor = 'yellow';
        weatherCard.style.color = 'black';
    } else if (tempValue >= 26) {
        weatherCard.style.backgroundColor = 'red';
    }

    // Set a simple icon based on description
    const desc = data.description.toLowerCase();
    if (desc.includes('sun') || desc.includes('clear')) {
        weatherIcon.src = 'https://img.icons8.com/emoji/96/000000/sun-emoji.png';
    } else if (desc.includes('cloud')) {
        weatherIcon.src = 'https://img.icons8.com/emoji/96/000000/cloud-emoji.png';
    } else if (desc.includes('rain')) {
        weatherIcon.src = 'https://img.icons8.com/emoji/96/000000/cloud-with-rain-emoji.png';
    } else {
          // 🆕 Default icon if description doesn't match
          return ''; 
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    weatherCard.classList.add('hidden');
}

function saveSearch(city) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    if (!searches.includes(city)) {
        searches.unshift(city);
        if (searches.length > 3) {
            searches.pop();
        }
        localStorage.setItem('searches', JSON.stringify(searches));
    }
    displayPreviousSearches();
}

function displayPreviousSearches() {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    previousSearches.innerHTML = '';
    searches.forEach(city => {
        const btn = document.createElement('button');
        btn.textContent = city;
        btn.onclick = () => {
            cityInput.value = city;
            fetchWeather();
        };
        previousSearches.appendChild(btn);
    });
}

// Display saved searches on page load
displayPreviousSearches();
