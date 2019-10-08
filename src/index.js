document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const list = document.querySelector('#tasks');
  
  
  form.addEventListener('submit', e=>{
    e.preventDefault();
    // grab the value from text field in the form 
    let value = e.target[0].value

    
    
    const task = document.querySelector(value);
    if (value === ""){return} //make the text field empty
    if(!task){
      let li = document.createElement('li');
      li.duration = e.target[1].value;
      li.priority = e.target[2].value;
      setPriorityColor(li)

      let btn = document.createElement('button');
      btn.innerHTML = "❌";

      list.appendChild(li)
      li.id = value 
      li.innerHTML = `${value} - ${li.duration} min`
      li.appendChild(btn);
      btn.addEventListener('click', e=>{
        btn.parentElement.remove();
      })
    }
    value = ""

  })


  function setPriorityColor(taskItem){
    if (taskItem.priority == 'high'){
      taskItem.style.color = 'red'
    }else if (taskItem.priority == 'medium'){
      taskItem.style.color = 'orange'
    } else{
      taskItem.style.color = 'green'
    }
  }
});
