$(document).ready(function() {
    // Function to run when the document is ready

    let btn = $("#hamburger-button"); // Selecting the hamburger button element
    let menu = $(".menu-background"); // Selecting the menu background element

    menu.click(function() {
        // Event listener for clicking on the menu background
        $("#menu").removeClass("slide-top"); // Removing the "slide-top" class from the menu
        $("#menu").toggleClass("slide-bottom"); // Toggling the "slide-bottom" class for the menu
        $("#main").css("filter", "blur(0px)"); // Resetting the blur effect on the main content
        setTimeout(function() {
            menu.css("visibility", "hidden"); // Hiding the menu background after a short delay
        }, 200);
    });

    btn.click(function() {
        // Event listener for clicking on the hamburger button
        $("#menu").removeClass("slide-bottom"); // Removing the "slide-bottom" class from the menu
        $("#menu").toggleClass("slide-top"); // Toggling the "slide-top" class for the menu
        $("#main").css("filter", "blur(10px)"); // Applying a blur effect on the main content
        menu.css("visibility", "visible"); // Making the menu background visible
    });
});
