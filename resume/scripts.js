
function msgClear() {
    document.getElementById("messageTextArea").value = "";
    document.getElementById("nameMessage").value = "";
    document.getElementById("emailMessage").value = "";
}

function msgSubmit() {
    msgClear();
    document.getElementById("messageSubmit").style.display = "none";
    document.getElementById("messageClear").style.display = "none";
    document.getElementById("hiddenDiv").style.display = "block";
}

function changeColor(elem) {
    document.getElementById(elem).style.color = "red";
}

function changeColorBack(elem) {
    document.getElementById(elem).style.color = "black";
}
