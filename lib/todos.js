
function addTodo() {
  const todoValue = $l('input').val(); 
  const todo = document.createElement("li");
  
  if (todoValue !== "") {
    todo.innerHTML = todoValue; 
    $l('input').val("");   
    $l('ul.todo-items').append(todo); 
  } 
}

function clearTodos() {

  $l('ul.todo-items').children().remove(); 
}

function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function colorizeTodos(){
  const items = $l('ul.todo-items').children();
  
  for (var i = items.elements.length - 1; i >= 0; i--) {
    const color = generateRandomColor();
    
    $l(items.elements[i]).attr('style',`background-color: ${color};`); 
  }
}