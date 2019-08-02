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
        //.append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\portfolio.html\">Portfolio</a></li>")
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\personal.html\">Personal</a></li>")
        .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"\contact.html\">Contact</a></li>");
    
    //add spacing to end of document.
    //replace with dynamically generated footer in the future.
    $("body").append("<br/>");
}
