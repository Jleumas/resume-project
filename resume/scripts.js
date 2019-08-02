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
    //build top level nav element
    $("#navBarHook")
        .append("<a class=\"navbar-brand\" id=\"navBarBrand\" href=\"index.html\">Sam Dyer</a>");

    //add hamburger button
    $("#navBarHook")
        .append("<button id=\"hamburgerButton\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"></button>");

    $("#hamburgerButton")
        .append("<span class=\"navbar-toggler-icon\"></span>");
    
    //create container for list
    $("#navBarHook")
        .append("<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"></div>");

    //create list to insert links
    $("#navbarSupportedContent")  
        .append("<ul class=\"navbar-nav\" id=\"navbarList\"></ul>");

    //add links
    $("#navbarList")
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\experience.html\">Experience</a></li>")
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\skills.html\">Skills</a></li>")
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\education.html\">Education</a></li>") 
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\portfolio.html\">Portfolio</a></li>")
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\personal.html\">Personal</a></li>")
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\contact.html\">Contact</a></li>");
    
    //add spacing to end of document.
    //replace with dynamically generated footer in the future.
    $("body").append("<br/>");
}


function loadNavBarList(){
    
}