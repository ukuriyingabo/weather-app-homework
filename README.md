# weather-app-homework
JavaScript assignments for practicing fetch, async/await, APIs, and DOM manipulation.

🌤 Weather App Homework
API: https://goweather.herokuapp.com/weather/

📝 Instructions:
Build a weather viewer app where users can search for cities and view weather information.

🎯 Requirements:

1. Input Field
Create an input field for users to type a city name
TODO: Add input field code here

2. Weather Data Display
Display the following information for the searched city:
- Temperature
TODO: Add temperature display code here

- Wind
TODO: Add wind display code here

- Description
TODO: Add description display code here

3. Visual Elements
a. Weather Icon
Display an appropriate weather icon based on the description
TODO: Add weather icon code here

b. Temperature-based Background Colors
Change background color based on temperature:
- Cold (≤15°C): blue
TODO: Add cold temperature styling code here

- Warm (16°C - 25°C): yellow
TODO: Add warm temperature styling code here

- Hot (≥26°C): red
TODO: Add hot temperature styling code here

4. Error Handling
Handle cases where:
- City doesn't exist
- API returns no data
TODO: Add error handling code here

🧠 Bonus Challenge:
Implement local storage to:
- Store last 3 searched cities
- Allow users to click and view previous searches
TODO: Add local storage implementation here

💡 Tips:
- Use fetch() to call the API
- Display data in a styled card
- Consider using async/await for API calls
- Test your error handling with invalid city names
