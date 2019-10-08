document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");
  const priorityButton = document.getElementById("order-tasks")

  let idCounter = 0;

  taskForm.addEventListener("submit", addToDo)

  function addToDo(event) {
    event.preventDefault()

    let newToDo = createToDo();
    newToDo.priority = event.target[1].value
    newToDo.date = event.target[2].value

    changeColour(newToDo);
    addDate(newToDo);
    createButton(newToDo);

  }

  function createToDo(){
    newToDo = tasks.appendChild(document.createElement('li'));
    newToDo.innerHTML = document.getElementById('new-task-description').value;
    newToDo.id = idCounter;
    idCounter += 1;
    return newToDo;
  }

  function createButton() {
    button = document.createElement('button');
    button.innerHTML = 'X';
    button.id = `button-${idCounter-1}`;
    newToDo.appendChild(button);
    button.addEventListener("click", handleRemove)
  }

  function handleRemove(event){
    event.preventDefault();
    listItem = event.target.parentElement;
    listItem.remove()
  }
  
  function changeColour(newToDo){
    if (newToDo.priority == "1") {
      newToDo.style.color = "red";
    } else if (newToDo.priority == "2") {
      newToDo.style.color = "orange";
    } else {
      newToDo.style.color = "green";
    }
  }

  function addDate(newToDo) {
    newToDo.textContent += ` - ${newToDo.date}`
  }

  priorityButton.addEventListener("click", orderTasks)

  function orderTasks(){
    priorityHash = sortEventsByPriority()
    destroyExistingNodes()
    appendNewNodes(priorityHash)
  }

  function sortEventsByPriority() {
    priorityHash = {"green": [], "orange": [], "red": []}
    nodes = tasks.childNodes

    for (let i=0; i < tasks.childNodes.length; i++) {
      if (nodes[i].priority == "3") {
        priorityHash["green"].push(nodes[i]);
      } else if (nodes[i].priority == "2") {
        priorityHash["orange"].push(nodes[i]);
      } else {
        priorityHash["red"].push(nodes[i]);
      }
    }
    return priorityHash
  }

  function destroyExistingNodes() {
    nodes = tasks.childNodes
    for (let i=0; i < nodes.length; i++){
      nodes[i].remove()
    }
  }

  function appendNewNodes(priorityHash){
  
    priorities = ["red", "orange", "green"]

    for (let i=0; i<priorities.length; i++) {
      for (let j=0; j<priorityHash[priorities[i]].length; j++){
        tasks.appendChild(priorityHash[[priorities[i]][j])
      }
    }
  }

});