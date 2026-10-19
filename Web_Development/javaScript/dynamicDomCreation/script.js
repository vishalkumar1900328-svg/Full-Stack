const H = document.createElement("h2");
const P = document.createElement("p");
const B = document.createElement("button");

H.classList.add("text-info");

const div = document.getElementById()

// Dynamic list 

const ar = ["Vishal", "Param", "Nikhil", "Deepanshu", "Train", "LalGanj"];

const list = document.createElement("ol");

ar.forEach((item) => {
    const l = document.createElement("li");
    l.textContent = item;
    list.appendChild(l);
});

document.getElementById("myList").appendChild(list);