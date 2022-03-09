const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// !Show Error
function showError(input, message) {
  const formControl = input.parentElement;

  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// !Success Message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// !Check valid Mail
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
// !Events
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!validateEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  if (confirmPassword.value === "") {
    showError(confirmPassword, "Password is required");
  } else {
    showSuccess(confirmPassword);
  }
});
