const storeData = JSON.parse(localStorage.getItem("userData")) || [];

function Login() {
  const userName = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("Loginpassword").value.trim();

  const findUser = storeData.find(el => el.user === userName);

  if (!findUser) {
    alert("User not found ❌");
    return;
  }

  if (findUser.pass !== password) {
    alert("Password doesn't match ❌");
    return;
  }

  sessionStorage.setItem("token", "loggedin");
  sessionStorage.setItem("loggedUser", userName);
  // alert("Login Successful ✅");
  window.location.href = "/local storage/page/home.html";
}