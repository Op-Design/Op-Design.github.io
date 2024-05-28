// Function to load partials
function loadPartials() {
    $("#navbar").load("partials/navbar.html");
    $("#home").load("partials/home.html");
    $("#about").load("partials/about.html");
    $("#service").load("partials/service.html");
    $("#skils").load("partials/skills.html");
    $("#experiences").load("partials/experiences.html");
    $("#portfolio").load("partials/portfolio.html");
    $("#projects").load("partials/projects.html");
    $("#testimonials").load("partials/testimonials.html");
    $("#footer1").load("partials/footer1.html");
}

// Load partials after document is ready
$(document).ready(function() {
    loadPartials();
});
