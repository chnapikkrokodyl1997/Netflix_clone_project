window.addEventListener("DOMContentLoaded", () => {
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm-password");

  function validatePasswords() {
    password.classList.remove("valid", "invalid");
    confirm.classList.remove("valid", "invalid");

    if (!password.value && !confirm.value) return;

    if (password.value === confirm.value) {
      password.classList.add("valid");
      confirm.classList.add("valid");
    } else {
      password.classList.add("invalid");
      confirm.classList.add("invalid");
    }
  }

  password.addEventListener("input", validatePasswords);
  confirm.addEventListener("input", validatePasswords);
  password.addEventListener("focus", validatePasswords);
  confirm.addEventListener("focus", validatePasswords);
});
