const showAssBtn = document.getElementById("showAssignmentNotificationm");
const showAttBtn = document.getElementById("showAssignmentNotificationm");
const stopAssBtn = document.getElementById("showAssignmentNotificationm");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendanceNotification");

function ShowAssignment() {
  assPara.textContent = "Your assignment deadline is approaching.";
}

showAssBtn.addEventListener("click", ShowAssignment);

showAttBtn.addEventListener("click", () => {
  attPara.textContent = "Check your attendance status.";
});

stopAssBtn.addEventListener("click", () => {
  showAttBtn.removeEventListener("click", () => {
    attPara.textContent = "Please Check your attendane status.";
  });

  assPara.textContent = "Your Assignment Notification is Stopped.";
});

const parent = document.getElementById("OuterDiv");
const child = document.getElementById("InnerDiv");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
