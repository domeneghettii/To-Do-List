function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let button = document.createElement("button");
    button.textContent = "Remover";
    button.onclick = function() {
        li.remove();
    };

    li.appendChild(button);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}