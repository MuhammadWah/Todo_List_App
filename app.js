// Array to store tasks
let taskList = [];

// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById("new-task");
    const task = taskInput.value.trim();
    
    if (task !== "") {
        // Add new task with important and completed flags set to false
        taskList.push({ text: task, completed: false, important: false });
        taskInput.value = ""; // Clear the input field after adding the task
        renderTasks(); // Update the task list display
    } else {
        alert("Please enter a task.");
    }
}

// Function to render the tasks on the page
function renderTasks() {
    const taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = ""; // Clear the current list before rendering

    // Loop through the tasks array and create list items
    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        // Toggle classes based on task properties
        li.classList.toggle("done", task.completed);
        li.classList.toggle("important", task.important); // Highlight if important

        // Set the content of each list item and include action buttons
        li.innerHTML = `
            ${task.text}
            <button onclick="toggleTask(${index})">✔</button>
            <button onclick="deleteTask(${index})">✖</button>
            <button onclick="markImportant(${index})">⭐</button>
        `;
        taskListElement.appendChild(li);
    });
}

// Function to toggle the completion status of a task
function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks(); // Update the task list display
}

// Function to delete a task from the list
function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks(); // Update the task list display
}

// Function to mark a task as important
function markImportant(index) {
    // Toggle the important status of the task
    taskList[index].important = !taskList[index].important;
    renderTasks(); // Update the task list display
}
