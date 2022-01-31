

var state = {
    todos: [],
  };
  
  // todos : [{}]
  
  // todo item = {
  //     id:
  //     name : "have dinner ",
  
  // }
  
  /*
  my todo item should look like this : 
  {
      id : number/string,
      name: "string"
  }
  */
  
  // var todoItem1 = {
  //   id: 1,
  //   name: "have dinner with friend",
  // };
  // var todoItem2 = {
  //   id: 1,
  //   name: "friend",
  // };
  // var todoItem3 = {
  //   id: 1,
  //   name: "have dinner",
  // };
  
  var todoListElement = document.getElementById("todo-list");
  var form = document.querySelector(".input-form");
  var inputElement = document.getElementById("todo-input");
  
  form.addEventListener("submit", addTodoItem);
  
  function addTodoItem(e) {
    e.preventDefault();
    if (inputElement.value !== "") {
      state.todos.push(inputElement.value);
      printItemToScreen(inputElement.value);
      inputElement.value = "";
    }
    console.log(state.todos);
  }
  
  function printItemToScreen(todoItem) {
    var todoHTML = `<div class="todo-item"  >
      <span id="item-${todoItem}">${todoItem}</span>
      <input type="text" class="dnone" id="edit"/>
      <button onclick="doubleItem('${todoItem}')">double</button>
      <button onclick="edititem()">edit</button>
      <i onclick="deleteItem('${todoItem}')" class="fa fa-trash-o" style="font-size:20px;color:red"></i>
     
    </div>`;
    //   deleteItem(todoItem);
    todoListElement.innerHTML += todoHTML;
    console.log(todoItem);
  }
  
  //  ['geekster',   'aknsanskanskan']
  
  function deleteItem(item) {
    //   state.todos.splice(index, number of elements to be deleted)
    var index = state.todos.indexOf(item);
    state.todos.splice(index, 1);
    console.log(state.todos);
    renderArray();
  }
  
  function renderArray() {
    todoListElement.innerHTML = "";
    for (i in state.todos) {
      printItemToScreen(state.todos[i]);
      //   var todoHTML = `<div class="todo-item"  >
      //   <span >${state.todos[i]}</span>
      //   <i onclick="deleteItem('${state.todos[i]}')" class="fa fa-trash-o" style="font-size:20px;color:red"></i>
      // </div>`;
      // todoListElement.innerHTML += todoHTML;
    }
  }
  const doubleItem= (item)=>{
    state.todos.push(item);
    renderArray();
  }
  // var namex= "geekster"
  
  // Element.innerHTML = "<div></div>"
  
  // // "<div>"+name+"</div>"
  
  // // createElemet(div)
  // // .innettext = name
  
  // Element.innerHTML = `<div>${namex}</div>`
  
  // // "<div>geekster</div>"
  
  
  function edititem(item) {
   
  }
