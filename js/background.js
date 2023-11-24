/**
 * 2023/11/23
 * 소멘텀 메인에 뜨는 배경화면
 * 랜덤으로 나오게 한다.
 */

const images = [
    "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg",
    "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg",
    "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg",
    "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg",
    "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg",
    "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg",
    "30.jpeg", "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg",
    "35.jpeg", "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg",
    "40.jpeg", "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg",
    "45.jpeg", "46.jpeg", "47.jpeg", "48.jpeg", "49.jpeg",
    "50.jpeg", "51.jpeg", "52.jpeg"
];

const selectedImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
//console.log(bgImage);

bgImage.src = `./img/${selectedImage}`;

document.body.appendChild(bgImage);

