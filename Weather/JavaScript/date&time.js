// 날짜
function getDate() {
  const dateEl = document.querySelector(".date");

  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  let fullDate = `${year}.${month}.${day}`;

  dateEl.textContent = fullDate;
}

// 일출, 일몰
function get_sunrise_sunsetTime(sunset, sunrise) {
  const sunRiseEl = document.querySelector(".sunrise");
  const sunSetEl = document.querySelector(".sunset");

  const sunsetHour = String(new Date(sunset * 1000).getHours()).padStart(
    2,
    "0"
  );
  const sunsetMin = String(new Date(sunset * 1000).getMinutes()).padStart(
    2,
    "0"
  );
  const sunriseHour = String(new Date(sunrise * 1000).getHours()).padStart(
    2,
    "0"
  );
  const sunriseMin = String(new Date(sunrise * 1000).getMinutes()).padStart(
    2,
    "0"
  );

  sunRiseEl.textContent = `${sunsetHour}:${sunsetMin}`;
  sunSetEl.textContent = `${sunriseHour}:${sunriseMin}`;
}

getDate();
