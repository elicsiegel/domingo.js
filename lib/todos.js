
function addTodo() {
  const todoValue = $l('input').val(); 
  const todo = document.createElement("li");
  
  if (todoValue !== "") {
    $l('li.default-todo').remove();
    $l('li.cleared-todo').remove();

    $l(todo).html(todoValue);
    $l('input').val("");   
    $l('ul.todo-items').append(todo); 
  } 
}

function clearTodos() {
  $l('ul.todo-items').children().remove(); 

  const defaultTodo = document.createElement("li");
  $l(defaultTodo).html("None pending!");
  $l(defaultTodo).addClass("cleared-todo"); 
  
  $l('ul.todo-items').append(defaultTodo); 
}

function requestGif() {
  // debugger
  $l('.gif-box').children().attr('src', ''); 
  $l.ajax({
    url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg',
    success: (res) => updateGifImage(res)
  });
}

function updateGifImage(res) {
  $l('.gif-box').children().attr('src', res.data.image_original_url)
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