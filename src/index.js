document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById('create-task-form');
  const tasks = document.getElementById('tasks');

  taskForm.addEventListener('submit', addToDo);

  function addToDo(event) {
    event.preventDefault();
    let newToDo = createToDo();
    createButton();
    assignPriority();
    addDueDate();
  }

  function createToDo() {
    newToDo = tasks.appendChild(document.createElement('li'));
    newToDo.innerText = document.getElementById('new-task-description').value;
    return newToDo; 
  }

  function createButton() {
    button = document.createElement('button');
    button.innerText = 'X';
    newToDo.appendChild(button);
    button.addEventListener("click", handleRemove );
  }

  function handleRemove(event){
    event.preventDefault();
    listItem = event.target.parentElement;
    listItem.remove();
  }

  function assignPriority() {
    priority = taskForm[1].value;
    if (priority == "low") {
      newToDo.style.color = 'green';
    } else if (priority == "medium") {
      newToDo.style.color = 'orange';
    } else {
      newToDo.style.color = 'red';
    }
  }

  function addDueDate() {
    dueDate = taskForm[2].value;
    newToDo.insertAdjacentHTML(`afterbegin`, `${dueDate} - `)
  }


});
