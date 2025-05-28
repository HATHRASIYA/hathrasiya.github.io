const ADMIN_EMAIL = "the3community@gmail.com";
const TEMP_PASSWORD = "hathrasiya123"; // Change this later securely

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === ADMIN_EMAIL && password === TEMP_PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
