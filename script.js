document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value.trim();
  if (phone.length < 6) {
    alert("Please enter a valid phone number.");
    return;
  }
  window.location.href = "verify.html";
});
