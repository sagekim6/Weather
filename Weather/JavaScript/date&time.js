
// 날짜
function getDate(){
  const date = new Date();

  const month = date.getMonth()+1;
  const day = date.getDate();
  const year = date.getFullYear();
  let fullDate = `${year}.${month}.${day}`;
  const dateSpan = document.querySelector('.date');
  dateSpan.textContent = fullDate;
}

function get_sunrise_sunsetTime(sunset, sunrise){
  const sunsetHour = String(new Date(sunset*1000).getHours()).padStart(2, '0');
  const sunsetMin = String(new Date(sunset*1000).getMinutes()).padStart(2, '0');
  const sunriseHour = String(new Date(sunrise*1000).getHours()).padStart(2, '0');
  const sunriseMin = String(new Date(sunrise*1000).getMinutes()).padStart(2, '0');
  const sunriseSpan = document.querySelector('.sunriseTime');
  const sunsetSpan = document.querySelector('.sunsetTime');
  
  sunriseSpan.innerHTML = `<b>sunrise</b>  ${sunsetHour}:${sunsetMin}`;
  sunsetSpan.innerHTML = `<b>sunset</b>  ${sunriseHour}:${sunriseMin}`;
}

getDate();