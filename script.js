window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form"),
        inputs = document.getElementsByClassName("input"),
        firstName = document.getElementById("firstName"),
        firstNameLabel = document.getElementById("firstNameIcon"),
        firstNameError = document.getElementById("firstNameError"),
        lastName = document.getElementById("lastName"),
        lastNameLabel = document.getElementById("lastNameIcon"),
        lastNameError = document.getElementById("lastNameError"),
        email = document.getElementById("email"),
        emailLabel = document.getElementById("emailIcon"),
        emailError = document.getElementById("emailError"),
        password = document.getElementById("password"),
        passwordLabel = document.getElementById("passwordIcon"),
        passwordError = document.getElementById("passwordError");
    let isValid = true;

    const validateEmail = (email) => {
        return !String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    console.log(inputs);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (firstName.value === "" || firstName.value == null) {
            isValid = false;
            firstName.classList.add("input__failed");
            firstName.placeholder = "";
            firstNameLabel.classList.add("error__label");
            firstNameError.classList.add("show");
        }

        if (lastName.value === "" || lastName.value == null) {
            isValid = false;
            lastName.classList.add("input__failed");
            lastName.placeholder = "";
            lastNameLabel.classList.add("error__label");
            lastNameError.classList.add("show");
        }

        if (validateEmail(email.value) || email.value == null) {
            isValid = false;
            email.classList.add("input__failed");
            email.value = "";
            email.placeholder = "email@example/com";
            emailLabel.classList.add("error__label");
            emailError.classList.add("show");
        }

        if (password.value === "" || password.value == null) {
            isValid = false;
            password.classList.add("input__failed");
            password.placeholder = "";
            passwordLabel.classList.add("error__label");
            passwordError.classList.add("show");
        }
    });

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focus", () => {
            if (!isValid) {
                isValid = true;
                firstName.classList.remove("input__failed");
                firstName.placeholder = "First Name";
                firstNameLabel.classList.remove("error__label");
                firstNameError.classList.remove("show");
                lastName.classList.remove("input__failed");
                lastName.placeholder = "Last Name";
                lastNameLabel.classList.remove("error__label");
                lastNameError.classList.remove("show");
                email.classList.remove("input__failed");
                email.placeholder = "Email Address";
                emailLabel.classList.remove("error__label");
                emailError.classList.remove("show");
                password.classList.remove("input__failed");
                password.placeholder = "Password";
                passwordLabel.classList.remove("error__label");
                passwordError.classList.remove("show");
            }
        });
    }
});
