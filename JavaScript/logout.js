function logout(){
localStorage.removeItem("user");
alert("Logged Out");
window.location.href="login.html";
}