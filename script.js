
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("taskList").innerHTML = ""; 
});


function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim(); 

    if (taskText === "") {
        alert("Please enter a wish!"); 
        return;
    }

    let taskList = document.getElementById("taskList");

    
    let li = document.createElement("li");
    li.classList.add("task-item");

    
    let icon = document.createElement("span");
    icon.classList.add("icon");
    icon.innerHTML = "⭕"; 
    icon.onclick = function () {
        toggleTaskCompletion(icon);
    };

    
    let textNode = document.createElement("span");
    textNode.classList.add("task-text");
    textNode.textContent = taskText;

    
    li.appendChild(icon);
    li.appendChild(textNode);
    taskList.appendChild(li);

    
    taskInput.value = "";
}


function toggleTaskCompletion(icon) {
    if (icon.innerHTML === "⭕") {
        icon.innerHTML = "✅"; 

        
        let audio = document.getElementById("clickSound");
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error("Audio Error:", error));
        } else {
            console.error("Audio file not found!");
        }

        
        if (typeof confetti !== "undefined") {
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 }
            });
        } else {
            console.error("Confetti library is not loaded!");
        }
    } else {
        icon.innerHTML = "⭕"; 
    }
}
