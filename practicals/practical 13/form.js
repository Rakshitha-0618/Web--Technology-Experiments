document.getElementById("form").addEventListener("submit", function(e) {

    let valid = true;

    document.querySelectorAll("small").forEach(e => e.innerHTML = "");

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let branch = document.getElementById("branch").value;

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passError").innerHTML = "Minimum 6 characters";
        valid = false;
    }

    if (password !== confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter valid phone number";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").innerHTML = "Select gender";
        valid = false;
    }

    if (branch === "") {
        document.getElementById("branchError").innerHTML = "Select branch";
        valid = false;
    }

    if (!valid) e.preventDefault();
});