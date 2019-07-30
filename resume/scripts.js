var x = 0;
var y = 0;
var radius = 100;
var angleDeg = 0;
var originx = 500;
var originy = 500;
var delay = 20;

function degreesToRad(degrees) {
    return (degrees * Math.PI / 180);
}

function circle(angle) {
    var newAngle = angle;
    newAngle = degreesToRad(newAngle);
    x = originx + radius * Math.cos(newAngle);
    y = originy + radius * Math.sin(newAngle);
}

async function rotate(elem) {
    var dom = document.getElementById(elem);
    circle(angleDeg);
    dom.style.left = x + 'px';
    dom.style.top = y + 'px';

    if (angleDeg < 360) {
        await sleep(delay);
        angleDeg += 1;
        return rotate(elem);
    }
    else {
        await sleep(delay);
        angleDeg = 0;
        return rotate(elem);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


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

function loadNavBar(){
    $("#navHook")  
        .append("<li><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Home</a></li>")
        .append("<li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#experience\">Experience</a></li>")
        .append("<li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#skills\">Skills</a></li>")
        .append("<li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#education\">Education</a></li>") 
        .append("<li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#personal\">Personal</a></li>")
        .append("<li><a class=\"nav-link\" data-toggle=\"tab\" href=\"#contact\">Contact</a></li>");
}