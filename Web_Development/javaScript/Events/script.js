function ShowAlert(){
    alert("Button is clicked using HTML Events");
}

document.getElementById("clickButton").addEventListener("click",ShowAlert2)

function ShowAlert2() {
    alert("Button is clicked using JS events");
}


document.getElementById("box").addEventListener("click", ()=>{
    document.getElementById("box").innerText= "Box is clicked";
})

document.getElementById("mouseOver").addEventListener("mouseover", ()=>{
    document.getElementById("mouseOver").innerText= "This is the paragraph when mouse is over it";
    
})

// Issue

document.getElementById("mouseOver").addEventListener("mouseout", ()=>{
    document.getElementById("mouseOver").innertText = "This is normal paragraph.";
})

document.getElementById("mouseCheck").addEventListener("mouseup", ()=>{
    document.getElementById("mouseCheck").innerText= "Mouse button pressed";
    
})

document.getElementById("doubleClick").addEventListener("dblclick", ()=>{
    document.getElementById("doubleClick").innerText= "The text is double clicked.";
    
})

document.getElementById("nameSubmit").addEventListener("click", ()=>{
    console.log(document.getElementById("fullName").value.trim());
    
})

document.getElementById("fullName").addEventListener("keydown", (e) => {
    (e.key === "Enter") 
    
})

document.getElementById("LoginForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("Login Done");
    
})

