document.getElementById("add-task").addEventListener("click", function() {
    const taskinput = document.getElementById("input-task");
    const taskText = taskinput.value.trim();

    if(taskText ===""){
        alert("pls enter your task");
        return;
    }
 
    

    li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    document.getElementById("task-list").appendChild(li);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    

    taskinput.value ="";

    li.querySelector(".delete-btn").addEventListener("click", function(){
        li.remove();
    });
});