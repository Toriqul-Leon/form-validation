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

// !Check Required Fields
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}

// !Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// !Events
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);

  //   if (username.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value === "") {
  //     showError(email, "Email is required");
  //   } else if (!validateEmail(email.value)) {
  //     showError(email, "Email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "Password is required");
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (confirmPassword.value === "") {
  //     showError(confirmPassword, "Password is required");
  //   } else {
  //     showSuccess(confirmPassword);
  //   }
});
