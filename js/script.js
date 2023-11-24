// 당신의 이름을 적어 주세요.
// 라고 사용자에게 물어 답변을 화면에 표시한다.

//document 의 id 가 frmLogin 인 form
//const frmLogin = document.getElementById("frmLogin");

//form
const frmLogin = document.getElementById("Login");
const inputLogin = frmLogin.querySelector("input");
//h1
const h1 = document.getElementById("h1");
// className 상수화
const CLASS_HIDDEN = "hidden";
const KEY_USERNAME = "userName";

function clickLogin(event){
    event.preventDefault();
    //form 숨긴다
    frmLogin.classList.add(CLASS_HIDDEN);
    const userName = inputLogin.value;
    //로컬 스토리지에 값 넣기
    localStorage.setItem(KEY_USERNAME,userName);
    //h1은 보여주고
    displayGreeting(userName);

    
}

// 인사를 출력하는 함수
// @param {*} argName

function displayGreeting(argName){
    h1.classList.remove(CLASS_HIDDEN);
    h1.innerHTML = `안녕, ${argName}~ :D`;
}

//로컬 스토리지에서 사용자 이름
const lsUserName = localStorage.getItem(KEY_USERNAME);

if(lsUserName === null){
    frmLogin.classList.remove(CLASS_HIDDEN);
    frmLogin.addEventListener("submit", clickLogin);
} else {
    frmLogin.classList.add(CLASS_HIDDEN);
    displayGreeting(lsUserName);
}

frmLogin.addEventListener("submit", clickLogin);
