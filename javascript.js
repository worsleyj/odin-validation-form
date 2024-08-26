const emailField = document.getElementById("email");
const zipCodeField = document.getElementById("zip-code");
const passwordField = document.getElementById("password");
const passwordConfirmField = document.getElementById("password-confirm");
const fields = [emailField, zipCodeField, passwordField, passwordConfirmField];
const messages = document.querySelector(".messages");
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
  validateForm();
});

fields.forEach((field) => {
  field.addEventListener("input", validateForm);
});

function validateForm() {
  if (!verifyPasswords()) {
    createMessage("Passwords don't match!");
  }

  createMessage(emailField.validationMessage);
  createMessage(zipCodeField.validationMessage);
  createMessage(passwordField.validationMessage);
  createMessage(passwordConfirmField.validationMessage);
  if (
    emailField.checkValidity() &&
    zipCodeField.checkValidity() &&
    passwordField.checkValidity() &&
    passwordConfirmField.checkValidity() &&
    verifyPasswords()
  ) {
    createMessage("GOOG");
  }
}

function createMessage(message) {
  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  messages.prepend(newMessage);
}

function verifyPasswords() {
  if (passwordField.value === passwordConfirmField.value) {
    return true;
  } else {
    return false;
  }
}
