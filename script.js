function submitForm(e) {
  e.preventDefault();
  const [isNameValid, isPhoneValid, isEmailValid, isPasswordValid] = [
    validateName(),
    validatePhone(),
    validateEmail(),
    validatePassword(),
  ];
  if (isNameValid && isPhoneValid && isEmailValid && isPasswordValid) {
    console.log("form submitted");
  }
}

const nameError = document.querySelector("#name_error");
function validateName() {
  let name = document.querySelector("#name").value;
  if (name.length === 0) {
    nameError.innerHTML = "enter a name";
    return false;
  }
  if (!name.match(/\w+\s\w+/)) {
    nameError.innerHTML = "enter full name";
    return false;
  }

  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

const phoneError = document.querySelector("#phone_error");
function validatePhone() {
  let phone = document.querySelector("#phone").value;
  if (!phone.match(/^\d{10}/)) {
    phoneError.innerHTML = "enter valid phone number";
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

const emailError = document.querySelector("#email_error");
function validateEmail() {
  let email = document.querySelector("#email").value;
  if (!email.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "enter valid email";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

const passwordError = document.querySelector("#password_error");
function validatePassword() {
  let password = document.querySelector("#password").value;
  if (password.length < 8) {
    passwordError.innerHTML = "must be 8 characters long";
    return false;
  }
  passwordError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function hideAndShowPassword(e) {
  let password = document.querySelector("#password");
  let passwordView = document.querySelector(".password-view");

  if (password.type === "password") {
    password.type = "text";
    passwordView.src = "./icons/view-off-stroke-rounded.svg";
  } else {
    password.type = "password";
    passwordView.src = "./icons/view-stroke-rounded.svg";
  }
}
