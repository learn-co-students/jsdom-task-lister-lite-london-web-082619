document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  const list = document.getElementById('list')
  const taskDescription = document.getElementById('new-task-description')


  form.addEventListener("submit", function(event){
    event.preventDefault()
    newTask = taskDescription.value
    addListItem(newTask)
    
  


  })
  function addListItem() {
    let newList = document.createElement('li')
    newList.innerText = newTask
    list.appendChild(newList)
  }
});

