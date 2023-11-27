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
const logout = document.querySelector("#logout-button");
const login = document.querySelector("#login-button");


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


login.addEventListener("click", (e) => {
    h1.classList.remove(CLASS_HIDDEN);   // 안녕 나오는거 뜨게함
    login.classList.add(CLASS_HIDDEN);   // 로그인 버튼 나오는거 없앰
   logout.classList.remove(CLASS_HIDDEN);

});

logout.addEventListener("click", (e) => {
    logout.classList.add(CLASS_HIDDEN);    // 로그아웃 버튼 숨김
    h1.classList.add(CLASS_HIDDEN);   // 안녕 나오는거 숨김
    localStorage.clear();                // 로컬 스토리지 삭제
    frmLogin.classList.remove(CLASS_HIDDEN); 
    inputLogin.value ="";
    login.classList.remove(CLASS_HIDDEN); 
  });
  


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
    //showLogoutForm();
}

frmLogin.addEventListener("submit", clickLogin);
