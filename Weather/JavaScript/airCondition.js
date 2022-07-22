// 공기 상태 가져오기
function showAirCondition(lat, lon, API_KEY) {
  const fineDustPM = document.querySelector(".pm10");
  const status10 = document.querySelector(".status10");
  const ultrafineDustPM = document.querySelector(".pm2_5");
  const status2_5 = document.querySelector(".status2_5");

  const airPollutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(airPollutionURL)
    .then((response) => response.json())
    .then((data) => {
      const pm2_5 = data.list[0].components.pm2_5; // 초미세먼지
      const pm10 = data.list[0].components.pm10; // 미세먼지

      fineDustPM.textContent = pm10;
      ultrafineDustPM.textContent = pm2_5;

      if (0 <= pm10 < 25) {
        status10.textContent = "Good";
      } else if (25 <= pm10 < 50) {
        status10.textContent = "Fair";
      } else if (50 <= pm10 < 90) {
        status10.textContent = "Moderate";
      } else if (90 <= pm10 < 180) {
        status10.textContent = "Poor";
      } else if (180 <= pm10) {
        status10.textContent = "Very Poor";
      }

      if (0 <= pm2_5 < 15) {
        status2_5.textContent = "Good";
      } else if (15 <= pm2_5 < 30) {
        status2_5.textContent = "Fair";
      } else if (30 <= pm2_5 < 55) {
        status2_5.textContent = "Moderate";
      } else if (55 <= pm2_5 < 110) {
        status2_5.textContent = "Poor";
      } else if (110 <= pm2_5) {
        status2_5.textContent = "Very Poor";
      }
    });
}
