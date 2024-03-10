// Add an event listener to the "PMS" button
document.getElementById('pms').addEventListener('click', function(event) {
    var userData = JSON.parse(localStorage.getItem("userData")) || [];
    var loggedInUser = userData.find(function(user) {
        return user.email === email; // Assuming you have stored the email of the logged-in user
    });

    if (!loggedInUser) {
        // User is not registered, prevent the default action of the link/button
        event.preventDefault();
        // Show a message or perform any action you want to inform the user
        alert('pehlay register karlo bhaai');
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userData = JSON.parse(localStorage.getItem("userData")) || [];

    var loggedInUser = userData.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (loggedInUser) {
        // User is logged in successfully
        var alertElement = document.createElement("div");
        alertElement.className = "alert alert-success alert-dismissible fade show";
        alertElement.role = "alert";
        alertElement.innerHTML = "Login successful! Redirecting to product management page...";

        var closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "btn-close";
        closeButton.setAttribute("data-bs-dismiss", "alert");
        closeButton.setAttribute("aria-label", "Close");

        alertElement.appendChild(closeButton);

        var alertsContainer = document.getElementById("alertsContainer");
        alertsContainer.innerHTML = ""; 
        alertsContainer.appendChild(alertElement);

        setTimeout(function() {
            window.location.href = "/PMS.html"; 
        }, 2000);
    } 
    else {
        // User is not logged in
        var alertElement = document.createElement("div");
        alertElement.className = "alert alert-danger alert-dismissible fade show";
        alertElement.role = "alert";
        alertElement.innerHTML = "Incorrect email or password. Please provide correct credentials";

        var closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "btn-close";
        closeButton.setAttribute("data-bs-dismiss", "alert");
        closeButton.setAttribute("aria-label", "Close");

        alertElement.appendChild(closeButton);

        var alertsContainer = document.getElementById("alertsContainer");
        alertsContainer.innerHTML = "";
        alertsContainer.appendChild(alertElement);
    }
});

