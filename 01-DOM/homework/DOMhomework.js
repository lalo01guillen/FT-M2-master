let nameSpan = document.getElementById("createdBy");
nameSpan.innerHTML = "Aplicación creada por Eduardo"

var toDoItems = [];

function ToDo (description) {
        
            this.description = description;
            this.complete = false;
}


ToDo.prototype.completeToDo = function () {
    this.complete = true;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addToDo() {
  // Tu código acá:
    let newTodo = new ToDo(toDoInput.value);
    toDoItems.push(newTodo);
    toDoInput.value = "";
    displayToDos();
}


function displayToDos() {
  let toDoContainer = document.getElementById("toDoContainer");
  toDoContainer.innerHTML = "";
  let toDoItemsResult = buildToDos(toDoItems);
  toDoItemsResult.forEach((todo) => toDoContainer.appendChild(todo));
}


function buildToDos(toDos) {
  let todoObj = toDos.map((todo, index) => buildToDo(todo, index));
  return todoObj;
  
}

function buildToDo(todo, index) {
  let toDoShell = document.createElement('div');
  toDoShell.classList.add('toDoShell');
  let toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description;
  toDoText.id = index;
  toDoText.addEventListener('click', completeToDo);
  if (todo.complete) {
    toDoText.classList.add('completeText');
  }
  toDoShell.appendChild(toDoText);
  return toDoShell;
}

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
   const index = event.target.id;
  // Tu código acá:
  toDoItems[index].completeToDo();
  displayToDos();
}

btn = document.getElementById("addButton");
btn.addEventListener("click", addToDo);





// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
