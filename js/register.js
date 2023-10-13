//validate name 
function validateFirstName() {
    const firstNameInput = document.getElementById("firstname");
    const invalidFirstName = document.getElementById("invalid-first-name");

    if (firstNameInput.value.trim() === "") {
        invalidFirstName.textContent = "First name is required";
    } else {
        invalidFirstName.textContent = "";
    }
}

//validate name
function validateLastName() {
    const lastNameInput = document.getElementById("lastname");
    const invalidLastName = document.getElementById("invalid-last-name");

    if (lastNameInput.value.trim() === "") {
        invalidLastName.textContent = "Last name is required";
    } else {
        invalidLastName.textContent = "";
    }
}

//validate email input syntax
function validateEmail() {
    const emailInput = document.getElementById("userEmail");
    const invalidEmail = document.getElementById("invalid-email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        invalidEmail.textContent = "Email is required";
    } else if (!emailPattern.test(emailInput.value)) {
        invalidEmail.textContent = "Invalid email format";
    } else {
        invalidEmail.textContent = "";
    }
}

//validate password input
function validatePassword() {
    const passwordInput = document.getElementById("userPassword");
    const invalidPassword = document.getElementById("invalid-password");

    if (passwordInput.value.length < 8) {
        invalidPassword.textContent = "Password should be at least 8 characters long";
    } else {
        invalidPassword.textContent = "";
    }
}

//validate the retype password
function validateRetypePassword() {
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const invalidRetypePassword = document.getElementById("invalid-retype-password");
    const passwordInput = document.getElementById("userPassword");

    if (confirmPasswordInput.value !== passwordInput.value) {
        invalidRetypePassword.textContent = "Passwords do not match";
    } else {
        invalidRetypePassword.textContent = "";
    }
}

//validate form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const invalidForm = document.getElementById("invalid-form");

    form.addEventListener("submit", function (event) {

        if (!validateFirstName() || !validateLastName() || !validateEmail() || !validatePassword() || !validateRetypePassword()) {
            event.preventDefault(); 
            alert("Register failed");
            invalidForm.textContent = "Incorrect input";
        }
        
        form.submit();
        alert("Registered successfully!");
        form.reset(); 
    });
});
