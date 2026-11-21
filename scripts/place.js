// Display the current year
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

// Display the last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

// Static weather values matching the HTML
const temperature = 29;
const windSpeed = 12;

// Calculate wind chill using the metric formula
function calculateWindChill(temp, speed)  {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Display wind chill only when calculation conditions are met
const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    windChill.textContent = "N/A";
}