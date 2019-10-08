document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector('#submit-button');
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    createTask();
  });

  

  function createTask(){
    const ul = document.querySelector("#tasks");
    const description = document.querySelector("#new-task-description").value;
    const username = document.querySelector("#user-name").value;
    if (description && username){
      let li = createLi(description);
      let liWithUser = addUser(li, username);
      let liWithUserAndPriority = assignPriority(liWithUser);
      li = assignPriority(liWithUserAndPriority);
      ul.appendChild(li);
      document.querySelector("#new-task-description").value = "";
    }
  }

    function createLi(description){
      let li = document.createElement('li');
      li.textContent = `${description}`;
      li = createButtons(li);
      return li;
    }

    function createButtons(li){
      let liWithRemoveButton = addRemoveButton(li)
      return addEditButton(liWithRemoveButton)
    }
    
    function addUser(li, name){
      let userfield = document.createElement("span");
      userfield.classList.add("user-name");
      userfield.textContent = `${name}`;
      li.appendChild(userfield);
      return li;
    }

    function assignPriority(li){
      let priority = document.querySelector("select").value;
      li.setAttribute('data-priority', priority);
      return li
    }

    const sortButton = document.querySelector("#sort-button");
    sortButton.addEventListener("click", sortTasks);

    function sortTasks(){
      let list = document.querySelectorAll('li');
      let sortedList = [...list].sort(sortByPriority);
      for (let i=0; i< sortedList.length; i++){
        sortedList[i].parentNode.appendChild(sortedList[i]);
      }      
    }

    function sortByPriority(a,b){
      return a.dataset.priority.localeCompare(b.dataset.priority);
    }


  function addRemoveButton(li){
    const newButton = document.createElement("button");
    newButton.classList.add("remove-button");
    newButton.textContent = 'x';
    newButton.addEventListener('click', removeTask);
    li.appendChild(newButton);
    return li
  }

  function addEditButton(li) {
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editTask);
    li.appendChild(editButton);
    return li
  }

  function editTask(){
    const oldContent = this.parentNode.childNodes[0].nodeValue;
    const priority = this.parentNode.dataset.priority;
    const user = this.parentNode.querySelector("span").textContent;

    const taskDescription = document.querySelector("#new-task-description");
    const prioritySelect = document.querySelector("select");
    const userField = document.querySelector("#user");

    taskDescription.value = oldContent;
    prioritySelect.value = priority;
    userField.value = user;

    this.parentNode.remove();
  }



  function removeTask() {
    this.parentElement.remove();
  }

});
