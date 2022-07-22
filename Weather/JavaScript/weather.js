import API_KEY from "../key.js";

function onSuccess(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const currentweatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const curTemp = document.querySelector(".currentTemp");
  const humidEl = document.querySelector(".humidity");
  const locationEl = document.querySelector(".location");
  const descriptionEl = document.querySelector(".description");

  // 현재 날씨
  fetch(currentweatherURL)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.round(data.main.temp);
      const humidity = data.main.humidity;
      const location = data.name;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;

      curTemp.textContent = `${temp} ℃`;
      humidEl.textContent = `${humidity} %`;
      locationEl.textContent = location;
      descriptionEl.textContent = description;

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
