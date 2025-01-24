// Get references to DOM elements for interacting with the weather form and displaying weather information
const weatherForm = document.getElementById('weatherform');           // The weather form element
const cityInput = document.getElementById('searchbox');               // The input field where the user types the city name
const cityName = document.getElementById('cityName');                 // Element where the city name will be displayed
const temperature = document.getElementById('temp');                  // Element where the temperature will be displayed
const humidity = document.getElementById('humidity');                 // Element where humidity will be displayed
const description = document.getElementById('description');           // Element where weather description will be displayed
const weatherEmoji = document.getElementById('weatherEmoji');         // Element where the weather emoji will be shown
const errorDisplay = document.getElementById('errorDisplay');         // Element to display errors (e.g. city not found)
const weatherContainer = document.getElementById('weatherContainer'); // Container that holds the weather info
const cityElement = document.querySelector('city');                   // The element for the city data
const tempHumidElement = document.querySelector('temp-humid');        // The element for temperature and humidity data
const wthrDescriptionElement = document.querySelector('wthrdescription'); // The element for weather description

// OpenWeatherMap API key (for weather data access)
const apiKey = "b590181ba849752eab03ee84dd457280";

// Add an event listener for the form submission
weatherForm.addEventListener('submit', async (event) => {
    // Prevents the default form submission behavior (page reload)
    event.preventDefault();

    // Get the city name entered by the user, and trim any extra spaces
    const city = cityInput.value.trim();

    // Check if the city input is empty
    if (!city) {
        displayError("Please enter a city!"); // Show an error message if no city is entered
        return; // Exit the function early
    }

    // Attempt to fetch weather data for the entered city
    try {
        // Fetch weather data asynchronously
        const weatherData = await fetchWeatherData(city);

        // Check if weather data is found for the city
        if (weatherData) {
            // If found, update the UI with the weather data
            updateWeatherDisplay(weatherData);
        } else {
            // If no data is returned, show an error message
            displayError("City not found. Please try again.");
        }
    } catch (error) {
        // If an error occurs during the fetch process (e.g. network error), display an error message
        displayError("Error fetching weather data. Please try again later.");
    }
});

// Function to fetch weather data from the OpenWeather API
async function fetchWeatherData(city) {
    // Construct the API URL using the provided city and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Send a GET request to the OpenWeather API
    const response = await fetch(url);

    // If the response is not OK (i.e. 4xx or 5xx HTTP error), return null
    if (!response.ok) {
        return null;
    }

    // Parse and return the JSON response data
    return await response.json();
}

// Function to update the weather display with data received from the API
function updateWeatherDisplay(data) {
    // Destructure the necessary data from the API response
    const { name, main, weather } = data;

    // Update the city name display
    cityName.textContent = name.charAt(0).toUpperCase() + name.slice(1);

    // Update the temperature display with a weather emoji
    temperature.textContent = `🌡️${main.temp}°C`;

    // Update the humidity display
    humidity.textContent = `💧${main.humidity}%`;

    // Update the description of the weather (e.g. clear sky, clouds)
    description.textContent = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1);

    // Set the weather emoji based on the weather condition
    weatherEmoji.textContent = determineWeatherEmoji(weather[0].id);

    // Hide the error display and show the weather data container
    errorDisplay.classList.add('hidden');
    weatherContainer.classList.remove('hidden');
    
    // Make specific elements visible (e.g. city, temperature/humidity, description)
    cityElement.classList.remove('hidden');
    tempHumidElement.classList.remove('hidden');
    wthrDescriptionElement.classList.remove('hidden');
}

// Function to determine which emoji to show based on the weather ID
function determineWeatherEmoji(weatherID) {
    if (weatherID >= 200 && weatherID < 300) {
        return "⛈️"; // Thunderstorm
    } else if (weatherID >= 300 && weatherID < 500) {
        return "🌧️"; // Light rain
    } else if (weatherID >= 500 && weatherID < 600) {
        return "🌦️"; // Heavy rain
    } else if (weatherID >= 600 && weatherID < 700) {
        return "❄️"; // Snow
    } else if (weatherID >= 700 && weatherID < 800) {
        return "🌫️"; // Fog
    } else if (weatherID === 800) {
        return "☀️"; // Clear sky
    } else if (weatherID > 800) {
        return "☁️"; // Cloudy
    } else {
        return "❓"; // Unknown weather
    }
}

// Function to display error messages and hide weather data
function displayError(message) {
    // Set the error message text
    errorDisplay.textContent = message;

    // Show the error message
    errorDisplay.classList.remove('hidden');

    // Hide the weather data container elements
    cityElement.classList.add('hidden');
    tempHumidElement.classList.add('hidden');
    wthrDescriptionElement.classList.add('hidden');
    
    // Show the weather container with the error message
    weatherContainer.classList.remove('hidden');
}
