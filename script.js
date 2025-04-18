document.getElementById("add-task").addEventListener("click", function() {
    const taskinput = document.getElementById("input-task");
    const taskText = taskinput.value.trim();

    if(taskText ===""){
        alert("pls enter your task");
        return;
    }
 
    

    li = document.createElement("li");
    li.innerHTML = `<span class="taskText">${taskText}</span> <button class="edit-btn">edit</button> <button class="delete-btn">Delete</button>`;
    document.getElementById("task-list").appendChild(li);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    

    taskinput.value ="";

    li.querySelector(".delete-btn").addEventListener("click", function(){
        li.remove();
    });

    li.querySelector(".edit-btn").addEventListener("click", function(){
        const span = li.querySelector(".taskText");
        const currentText = span.innerText;

        const input = document.createElement("input");
        input.type ='text';
        input.value = currentText;
        input.classList.add("edit-input");

        li.replaceChild(input, span);
        this.textContent = "Save";

        this.addEventListener("click", function(){
            
        });
    });

    
});