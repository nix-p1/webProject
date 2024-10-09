document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        var isValid = true;

        // Validate Name
        var nameInput = document.getElementById("name");
        var error1 = document.getElementById("error1");
        if (nameInput.value.trim() === "") {
            isValid = false;
            error1.textContent = "Name is required";
        } else {
            error1.textContent = "";
        }

        // Validate Email
        var email1Input = document.getElementById("email1");
        var error2 = document.getElementById("error2");
        if (email1Input.value.trim() === "") {
            isValid = false;
            error2.textContent = "Email is required";
        } else {
            error2.textContent = "";
        }

        // Validate Retyped Email
        var email2Input = document.getElementById("email2");
        var error3 = document.getElementById("error3");
        if (email2Input.value.trim() === "") {
            isValid = false;
            error3.textContent = "Retyped Email is required";
        } else if (email1Input.value.trim() !== email2Input.value.trim()) {
            isValid = false;
            error3.textContent = "Emails do not match";
        } else {
            error3.textContent = "";
        }

        // Validate Query/Comments
        var queryInput = document.getElementById("query");
        var error4 = document.getElementById("error4");
        if (queryInput.value.trim() === "") {
            isValid = false;
            error4.textContent = "Query/Comments are required";
        } else {
            error4.textContent = "";
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
