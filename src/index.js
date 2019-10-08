document.addEventListener("DOMContentLoaded", () => {
  // your code here

  form = document.getElementById('create-task-form')

  form.addEventListener('submit', addTask)

  function addTask(e){
      e.preventDefault();

      let ul = document.getElementById('tasks')
      let li = document.createElement('li')
      li.innerHTML = document.getElementById('new-task-description').value + " "
      ul.appendChild(li)
      deleteButton(li)

      // take input from submit
      // let li = createElement('li')
      // li.innerHTML = input
      // store input in id=list').appendChild(li)
  }

  function deleteButton(item){
      let deleteButton = document.createElement('button')
      deleteButton.innerHTML = 'delete';
      deleteButton.addEventListener('click', removeItem)
      item.appendChild(deleteButton)  
  }

  function removeItem(element){
    let parentUl = element.path[2]
    let childLi = element.path[1]
    parentUl.removeChild(childLi)
  }


});
