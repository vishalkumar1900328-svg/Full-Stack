
function validateName() {

    let name = document.getElementById("name").value;

    let pattern = /^[A-Za-z ]+$/;

    if (pattern.test(name)) {
        document.getElementById("result").innerHTML = "Valid Name";
        document.getElementById("result").style.color = "green";
    }
    else {
        document.getElementById("result").innerHTML = "Invalid Name";
        document.getElementById("result").style.color = "red";
    }

}
