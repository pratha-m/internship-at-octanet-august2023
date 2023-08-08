let todoInput=document.getElementById("todoInput");
let addBtn=document.getElementById("addBtn");
let todoItems=document.getElementById("todoItems");
let todos=[];

const setLocalStorageItems=()=>{
    localStorage.setItem("todoapp",JSON.stringify(todos));
}
const getLocalStorageItems=()=>{
    todos=JSON.parse(localStorage.getItem("todoapp"));
}
addBtn.addEventListener("click",function(){
    let todoText=todoInput.value;
    if(!todoText){
        alert("Pls Enter Something");
    }
    else{
        todos.push({todoText,isDone:false});
        setLocalStorageItems();
        todoInput.value=null;
        renderTodos();
    }
})
const deleteTodo=(index)=>{
    todos.splice(index,1);
    setLocalStorageItems();
    renderTodos();
}
const doneTodo=(index)=>{
    if(todos[index].isDone){
       todos[index].isDone=false;
       setLocalStorageItems();
       renderTodos();
    }
    else{
       todos[index].isDone=true;
       setLocalStorageItems();
       renderTodos();
    }
}
const editTodo=(index)=>{
    let editText=document.getElementById("eachToDoText"+index);
    if(editText.contentEditable=="false"){
        editText.contentEditable="true";
        editText.style.border="1px solid #0000ff57";
        editText.addEventListener("focusout",()=>{
            editTodo(index);
        })
    }
    else{
        editText.contentEditable="false";
        editText.style.border="none";
        if(editText.innerText!=""){
            todos[index].todoText=editText.innerText;
            setLocalStorageItems();
        }
        renderTodos();
    }
}
const renderTodos=()=>{
    if(JSON.parse(localStorage.getItem("todoapp"))){
        getLocalStorageItems();
    }
    todoItems.innerHTML="";
    for(let i=0;i<todos.length;i++){
        todoItems.insertAdjacentHTML("beforeend",
        `<li id=${"eachToDo"+i} class="eachTodo">
            <div class="itemText" contentEditable=false id=${"eachToDoText"+i} ${todos[i].isDone?"style='text-decoration:line-through;'":""}>
              ${todos[i].todoText}
            </div> 
            <div class="itemBtns">
                <button onclick="doneTodo(${i})"><i class="fa fa-solid fa-check"></i></button>
                <button onclick="deleteTodo(${i})"><i class="fa fa-solid fa-trash"></i></button>
                <button onclick="editTodo(${i})"><i class="fa fa-solid fa-pencil"></i></button>
            </div>
        </li>`
        );
    }
}
renderTodos();