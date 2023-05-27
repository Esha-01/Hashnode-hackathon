document.getElementById("subscribe-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    // Perform subscription logic here
    console.log("Subscribed with email: " + email);
  });
  