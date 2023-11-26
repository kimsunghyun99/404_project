/**
 * 2023/11/23
 * 소멘텀 메인에 뜨는 배경화면
 * 랜덤으로 나오게 한다.
 */

const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
    "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg",
    "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
    "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg",
    "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg",
    "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg",
    "35.jpg"
];

const selectedImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
//console.log(bgImage);

bgImage.src = `./img/${selectedImage}`;

document.body.appendChild(bgImage);

