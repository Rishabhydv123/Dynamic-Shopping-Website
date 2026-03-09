document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (!form) return; 

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        if (!emailInput || !passwordInput) {
            alert("Email or Password field is missing!");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const user = { email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Login Successful");
        window.location.href = "index.html"; 
    });
});