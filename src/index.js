document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    createTask();
  });

  function createTask() {
    const ul = document.querySelector("#tasks");
    const commentContent = document.querySelector("#new-task-description").value;
    const user = document.querySelector("#user").value;
    if (commentContent && user) {
      let li = createLi(commentContent);
      let liWithUser = addUser(li, user)
      let liWithUserAndPriority = assignPriority(liWithUser);
      ul.appendChild(liWithUserAndPriority);
      document.querySelector("#new-task-description").value = "";

    }
  }

  function createLi(commentContent) {
    let li = document.createElement("li");
    li.textContent = `${commentContent}`;
    li = createButtons(li);
    return li
  }

  function addUser(li, name) {
    let username = document.createElement("span");
    username.classList.add("username")
    username.textContent = `${name}`;
    li.appendChild(username);
    document.querySelector("#user").value = "";
    return li
  }

  function assignPriority(li) {
    const priority = document.querySelector("select").value
    li.setAttribute("data-priority", priority)
    return li
  }

  function createButtons(li) {
    let liWithRemoveButton = addRemoveButton(li);
    return addEditButton(liWithRemoveButton);
  }

  function addRemoveButton(li) {
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "x";
    removeButton.addEventListener("click", removeTask);
    li.appendChild(removeButton);
    return li
  }

  function removeTask() {
    this.parentElement.remove();
  }

  function addEditButton(li) {
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTask);
    li.appendChild(editButton);
    return li
  }

  function editTask() {
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

  // function insertAfter(newNode, referenceNode) {
  //   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  // }

  const sortButton = document.querySelector("#sort")
  sortButton.addEventListener("click", sortTasks)

  function sortTasks() {
    let tasks = document.querySelectorAll("li");
    let sortedTasks = [...tasks].sort(sortByPriority);
    for (var i = 0; i < sortedTasks.length; i++) {
      sortedTasks[i].parentNode.appendChild(sortedTasks[i]);
    }
  }

  function sortByPriority(a, b) {
    return a.dataset.priority.localeCompare(b.dataset.priority);
  }
  
});
