// 공기 상태 가져오기
function showAirCondition(lat, lon, API_KEY) {
  const pm2_5title = document.querySelector(".pm2_5container .title");
  const pm2_5status = document.querySelector(".pm2_5container .status");
  const pm2_5measure = document.querySelector(".pm2_5container .measure");

  const pm10title = document.querySelector(".pm10container .title");
  const pm10status = document.querySelector(".pm10container .status");
  const pm10measure = document.querySelector(".pm10container .measure");

  pm10title.textContent = "Fine dust"; // 미세먼지
  pm2_5title.textContent = "Ultrafine dust"; // 초미세먼지
  const airPollutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(airPollutionURL)
    .then((response) => response.json())
    .then((data) => {
      const pm2_5 = data.list[0].components.pm2_5;
      const pm10 = data.list[0].components.pm10;
      const index = data.list[0].main.aqi;
      pm2_5measure.textContent = `${pm2_5}μg/m3`;
      pm10measure.textContent = `${pm10}μg/m3`;

      if (index === 1) {
        pm2_5status.textContent = "Good";
        pm10status.textContent = "Good";
      } else if (index === 2) {
        pm2_5status.textContent = "Fair";
        pm10status.textContent = "Fair";
      } else if (index === 3) {
        pm2_5status.textContent = "Moderate";
        pm10status.textContent = "Moderate";
      } else if (index === 4) {
        pm2_5status.textContent = "Poor";
        pm10status.textContent = "Poor";
      } else {
        pm2_5status.textContent = "Very Poor";
        pm10status.textContent = "Very Poor";
      }
    });
}
