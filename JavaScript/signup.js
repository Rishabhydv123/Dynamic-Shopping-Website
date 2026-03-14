const form = document.getElementById("signupForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const user = {
name,
email,
password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Signup Successful");

window.location.href = "login.html";

});