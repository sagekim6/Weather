import API_KEY from "../key.js";

function onSuccess(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const locationSpan = document.querySelector(".location");
  const mainTemp = document.querySelector(".mainTemp");
  const humidityDiv = document.querySelector(".humidity");
  const descriptionSpan = document.querySelector(".weatherDescription");
  const currentweatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // 현재 날씨
  fetch(currentweatherURL)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const location = data.name;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;

      locationSpan.textContent = location;
      mainTemp.textContent = `${temp}°C`;
      humidityDiv.innerHTML = `<b>humidity</b> ${humidity}%`;
      descriptionSpan.textContent = `${description}`;
      showIcon(icon);
      showAirCondition(lat, lon, API_KEY);
      showbackgroundImg(icon);
      get_sunrise_sunsetTime(sunrise, sunset);
    });
}

// 위치 정보 불러오기 실페
function onFail() {
  alert(`Sorry! can't find your location.`);
}

navigator.geolocation.getCurrentPosition(onSuccess, onFail);
