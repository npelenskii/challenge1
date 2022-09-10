window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form"),
        inputs = document.getElementsByClassName("input"),
        labels = document.getElementsByClassName("label"),
        errorText = document.getElementsByClassName("input__error");
    let isValid = true;

    const validateEmail = (email) => {
        return !String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        Array.prototype.forEach.call(inputs, function (input, index) {
            if (input.name !== "email") {
                if (input.value === "" || input.value == null) {
                    isValid = false;
                    input.classList.add("input__failed");
                    input.placeholder = "";
                    labels[index].classList.add("error__label");
                    errorText[index].classList.add("show");
                }
            } else if (input.name === "email") {
                if (validateEmail(email.value) || email.value == null) {
                    input.classList.add("input__failed");
                    input.value = "";
                    input.placeholder = "email@example/com";
                    labels[index].classList.add("error__label");
                    errorText[index].classList.add("show");
                }
            } else {
                if (input.value === "" || input.value == null) {
                    isValid = false;
                    input.classList.add("input__failed");
                    input.placeholder = "";
                    labels[index].classList.add("error__label");
                    errorText[index].classList.add("show");
                }
            }
        });
    });

    Array.prototype.forEach.call(inputs, (input) => {
        input.addEventListener("focus", () => {
            if (!isValid) {
                Array.prototype.forEach.call(inputs, (input, index) => {
                    input.classList.remove("input__failed");
                    labels[index].classList.remove("error__label");
                    errorText[index].classList.remove("show");

                    if (input.name === "firstName") {
                        input.placeholder = "First Name";
                    }
                    if (input.name === "lastName") {
                        input.placeholder = "Last Name";
                    }
                    if (input.name === "email") {
                        input.placeholder = "Email Address";
                    }
                    if (input.name === "password") {
                        input.placeholder = "Password";
                    }
                });
            }
            isValid = true;
        });
    });
});
