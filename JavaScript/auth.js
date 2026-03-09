const isLoggedIn = localStorage.getItem("isLoggedIn");
if(!isLoggedIn){
alert("Please Login First");
window.location.href = "login.html";
}

