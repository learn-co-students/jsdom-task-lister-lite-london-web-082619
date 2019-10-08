document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");
  const sort = document.getElementById('sort-button')

  form.addEventListener("submit", addToDoTask);
  function addToDoTask(e) {

    e.preventDefault();

    let task = document.getElementById(e.target[0].value);
      const button = document.createElement('button')
      button.innerText = 'Delete'
      if (e.target[0].value === "") {return};

        if (!task) {
          let li = document.createElement('li');
          let priority = e.target[1].value;
          li.id = e.target[0].value;
          li.className = e.target[1].value
          if (e.target[1].value === "high") { li.priority = 1; }
          else if (e.target[1].value === "medium") { li.priority = 2; }
          else { li.priority = 3; }
          list.appendChild(li);
          li.innerText = e.target[0].value;
          li.appendChild(button)
          button.addEventListener('click', deleteTask);
      
    }
    e.target[0].value = ""
  }
  
  sort.addEventListener('click', sortList)


  function deleteTask(e) {
  e.target.parentElement.remove()
  }

  function sortList(e) {
    let items = document.querySelectorAll('li');
    let sortedItems = [...items];
    sortedItems.sort((a, b) => (a.priority > b.priority) ? 1 : -1);
    for (let i = 0; i < sortedItems.length; i++) {
      sortedItems[i].parentElement.appendChild(sortedItems[i])
    }

  }
});
