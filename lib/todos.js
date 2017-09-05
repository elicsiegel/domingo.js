
function addTodo() {
  const todoValue = $l('input').val(); 
  const todo = document.createElement("li");
  
  if (todoValue !== "") {
    todo.innerHTML = todoValue;   
    $l('ul.todo-items').append(todo); 
  } 
}

function clearTodos() {

  $l('ul.todo-items').children().remove(); 
}