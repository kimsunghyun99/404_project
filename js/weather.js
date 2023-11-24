/**
 * 2023.11.23
 * 소멘텀 메인에 뜨는 날씨
 * 위치 기반으로 날씨를 알려 준다.
 * 날씨 API를 사용한다.
 */

function success(position){
    const APIKey = '61e8eb1eb7d0e7f0d0548ffb0c4a402e';
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //console.log(`You는 지금 위도 ${latitude}, 경도 ${longitude}에 있다요`);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`;

    fetch(url).then(response=>response.json()).then(data=>{
        console.log(data.name, data.weather[0].description, data.main.temp);

        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(3)");
        const city = document.querySelector("#weather span:last-child");
    
        weather.innerText = data.weather[0].description;
        temp.innerText = data.main.temp;
        city.innerText = data.name;
    })

   
}
function fail(){console.log('어디인가유??')}

navigator.geolocation.getCurrentPosition(success,fail);