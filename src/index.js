document.addEventListener("DOMContentLoaded", () => {
  // your code here

  var listTask = (event) => {
    event.preventDefault();
    const li = document.createElement('li')
    const ul = document.querySelector("ul#tasks")
    li.innerText = event.target.elements[0].value
    ul.appendChild(li)
  }

  var createTask = () => {
    var form = document.querySelector("form#create-task-form")
    form.addEventListener('submit', (event) => {
       listTask(event)
    })
  }

  createTask()

});