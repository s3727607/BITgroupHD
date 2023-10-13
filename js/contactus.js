document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Validate the form before submission
        if (validateForm()) {
                alert("Form submitted successfully!");
            contactForm.reset(); 
        }
    });

    function validateForm() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        // Validate name field (not empty)
        if (nameInput.value.trim() === "") {
            alert("Name field cannot be empty.");
            nameInput.focus(); // Set focus to the name input
            return false; // Validation fails
        }

        // Validate email field (not empty and valid format)
        if (emailInput.value.trim() === "") {
            alert("Email field cannot be empty.");
            emailInput.focus(); // Set focus to the email input
            return false; // Validation fails
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert("Invalid email format.");
            emailInput.focus(); // Set focus to the email input
            return false; // Validation fails
        }

        // Validate message field (not empty)
        if (messageInput.value.trim() === "") {
            alert("Message field cannot be empty.");
            messageInput.focus(); // Set focus to the message input
            return false; // Validation fails
        }

        // All validation checks passed
        return true; // Validation succeeds
    }

    // Function to validate email format using a regular expression
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
