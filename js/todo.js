/**
 * 최초작성일 : 2023.11.24
 * 최초작성자 : 207
 * 수정자 :
 * 이력 : 2023.11.24 최초 작성
 * 기능 : todo리스트를 제어한다
 *      todo리스트 추가
 *      todo리스트 로컬스토리지에 저장
 */

const frmToDo = document.getElementById("frmToDo");
const lstToDo = document.getElementById("lstToDo");
const inputToDo = document.querySelector("#frmToDo input");
let todos = [];
const KEY_TODOS = "todos";

// 로컬 스토리지에 저장
function saveTodos(){
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

// todo 리스트에서 항목을 삭제
function deleteToDo(event){
    //console.log("deleteTodo 함수 시작");
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    console.log("li = ",li);
    console.log("li 타입 = ",typeof(li));
    console.log("li.id 타입 = ",typeof(li.id));
    
    li.remove();
    todos = todos.filter((todo)=> 
        todo.id !== parseInt(li.id));
    saveTodos();

}

// todo 리스트 목록을 출력
function displayTodo(arg){
    // 리스트에 추가하기
    // ul>li>span
    // li 추가
    const li = document.createElement("li");
    li.id = arg.id;
    // span 추가
    const span = document.createElement("span");
    // span에 할 일 추가
    span.innerText = arg.text;

    const button = document.createElement("button");
    button.innerText = " bye~ 🎈";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    lstToDo.appendChild(li);
}

function handleSubmitTodo(event){
    event.preventDefault();
    const valueToDo = inputToDo.value;
    // console.log(valueToDo);
    inputToDo.value = '';
    const newToDoOjb = {
        text : valueToDo,
        id : Date.now(),
    };
    todos.push(newToDoOjb);
    // console.log(todos);
    displayTodo(newToDoOjb);
  
    saveTodos();
}   

frmToDo.addEventListener("submit", handleSubmitTodo);

const savedTodos = localStorage.getItem(KEY_TODOS);
if(savedTodos !== null){
    console.log("savedTodos:"+savedTodos);
    const parseSavedTodos = JSON.parse(savedTodos);
    todos = parseSavedTodos;
    parseSavedTodos.forEach(displayTodo);
    // parseSavedTodos.forEach(item => {
    //    console.log(item);
    // })

}