const taskInput = document.getElementById("taskInput");
const DuedateInput = document.getElementById("DuedateInput"); 
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList"); 

addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    const dueDate = DuedateInput.value; 
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }  
    if (!dueDate){
        alert("Please enter the due date");
        return;
    }  
    const newTask = document.createElement("p");    
    newTask.innerHTML = `
        The Task is: ${taskText}
        Due Date: ${dueDate}
    `;   
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "click here if completed"; 
    deleteButton.style.class= "button"; 
    deleteButton.style.marginLeft = "10px";   
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(newTask);
    });
    
    newTask.appendChild(deleteButton);
        
    taskList.appendChild(newTask);

    taskInput.value = "";
    DuedateInput.value = "";
});