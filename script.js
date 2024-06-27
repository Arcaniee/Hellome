// JavaScript code to add interactivity to the web page
document.getElementById("button").addEventListener("click", function() {
    alert("You clicked the button!");
});

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    alert("Name: " + name + "\nEmail: " + email);
});