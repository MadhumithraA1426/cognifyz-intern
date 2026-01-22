const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

/* CLIENT-SIDE ROUTING */
function navigate(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

/* PASSWORD STRENGTH CHECK */
function isStrongPassword(pass) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return regex.test(pass);
}

/* FORM SUBMISSION */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    // Username validation
    if (username.value.trim().length < 3) {
        userError.textContent = "Username must be at least 3 characters";
        valid = false;
    } else {
        userError.textContent = "";
    }

    // Password validation
    if (!isStrongPassword(password.value)) {
        passError.textContent =
            "Password must be 8+ chars, include uppercase, number & symbol";
        valid = false;
    } else {
        passError.textContent = "";
    }

    // If valid → navigate
    if (valid) {
        navigate("success");
        form.reset();
    }
});
