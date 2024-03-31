let tasks = [];

let countdownInterval;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();

  if (taskName !== "") {
    tasks.push(taskName);
    displayTasks();
    taskInput.value = "";
  }
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(listItem);
  });
}

function resetTasks() {
  tasks = [];
  displayTasks();
}

function startTimer() {
  let totalSeconds = 25 * 60;
  const timerDisplay = document.getElementById("timer");

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (totalSeconds === 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "00:00";
      alert("Pomodoro session finished!");
    } else {
      totalSeconds--;
    }
  }, 1000);
}

function resetTimer() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = "";
  clearInterval(countdownInterval);
}

// Function to open the About page
function openAbout() {
    document.getElementById("aboutPage").style.display = "block";
}

// Function to close the About page
function closeAbout() {
    document.getElementById("aboutPage").style.display = "none";
}
