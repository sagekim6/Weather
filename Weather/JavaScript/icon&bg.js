// 날씨 아이콘 가져오기
function showIcon(icon){
  const img = document.createElement('img');
  let iconNum = icon.substring(0,2);
  img.src = `/Weather/icons/${iconNum}.png`;

  const weatherIconDiv = document.querySelector('.weatherIcon');
  weatherIconDiv.insertBefore(img, weatherIconDiv.firstChild);
}

// 배경 사진 가져오기
function showbackgroundImg(id){
  // day
  if(id == '01d'){
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg)';
  } else if(id == '02d') {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg)';
  } else if(id == '03d') {
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)';
  } else if(id === '04d') {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/08/25/13/29/cloud-2680190_1280.jpg)';
  } else if(id == '09d' || '09n') {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2012/02/28/10/12/rain-17967_1280.jpg)';
  } else if(id == '10d' || '10n') {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2021/05/10/14/48/rain-6243559_1280.jpg)';
  } else if(id == '11d' || '11n') {
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)';
  } else if(id == '13d' || '13n') {
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
  } else if(id == '50d' || '50n') {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/11/18/15/36/fir-trees-1835402_1280.jpg)';
  }

  // night 
  if(id == '01n'){
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/08/07/21/52/nature-2608274_1280.jpg)';
  } else if(id == '02n') {
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1534862559316-6579e3b7872a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80)';
  } else if(id == '03n') {
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1514912885225-5c9ec8507d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)';
  } else if(id === '04n') {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/11/29/13/12/cloudy-1869753_1280.jpg)';
  } 
  document.body.classList.add('backgroundImg');
}
