const emailField = document.getElementById("email");
const zipCodeField = document.getElementById("zip-code");
const passwordField = document.getElementById("password");
const passwordConfirmField = document.getElementById("password-confirm");
const messages = document.querySelector(".messages");
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
  validateForm();
});

function validateForm() {
  if (!verifyPasswords()) {
    createMessage("Passwords don't match!");
  }

  if (
    emailField.checkValidity() &&
    zipCodeField.checkValidity() &&
    passwordField.checkValidity() &&
    passwordConfirmField.checkValidity() &&
    verifyPasswords()
  ) {
    createMessage("GOOG");
  } else createMessage("BAD");
}

function createMessage(message) {
  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  messages.append(newMessage);
}

function verifyPasswords() {
  if (passwordField.value === passwordConfirmField.value) {
    return true;
  } else {
    return false;
  }
}
