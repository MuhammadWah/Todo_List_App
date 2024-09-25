let taskList = [];

function addTask() {
    const taskInput = document.getElementById("new-task");
    const task = taskInput.value.trim();
    
    if (task !== "") {
        taskList.push({ text: task, completed: false });
        taskInput.value = ""; // Clear the input
        renderTasks();
    }
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = "";

    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.toggle("done", task.completed);

        li.innerHTML = `
            ${task.text}
            <button onclick="toggleTask(${index})">✔</button>
            <button onclick="deleteTask(${index})">✖</button>
        `;
        taskListElement.appendChild(li);
    });
}
