document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById('age').value;

    // Checking if any user data already exists in local storage
    var existingUserData = localStorage.getItem("userData");
    var userData = [];

    if (existingUserData) {
        // Parse the existing user data from JSON
        userData = JSON.parse(existingUserData);

        // Check if the email already exists
        var emailExists = userData.some(function(user) {
            return user.email === email;
        });

        if (emailExists) {
            // If email already exists, show alert and return
            displayAlert("This email is already taken. Please try another one.", "alert-danger");
            return;
        }
    }

    // Add new user data to the existing data
    userData.push({
        email: email,
        password: password,
        age: age
    });

    // Store the updated user data back to local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Bootstrap alert
    displayAlert("You have successfully registered!", "alert-success");

    // Redirect to the login page after 2 seconds
    setTimeout(function() {
        window.location.href = "/Login.html"; 
    }, 2000);
});

// Function to display Bootstrap alert
function displayAlert(message, className) {
    var alertElement = document.createElement("div");
    alertElement.className = "alert " + className + " alert-dismissible fade show";
    alertElement.role = "alert";
    alertElement.innerHTML = message;

    var closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "alert");
    closeButton.setAttribute("aria-label", "Close");

    alertElement.appendChild(closeButton);

    var container = document.querySelector(".container-fluid");
    container.insertBefore(alertElement, container.firstChild);
}
