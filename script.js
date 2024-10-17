const form = document.querySelector("form");
const passwordError = document.querySelector("#password_error");
const emailError = document.querySelector("#email_error");
const phoneError = document.querySelector("#phone_error");
const nameError = document.querySelector("#name_error");

function submitForm(e) {
  e.preventDefault();
  const [isNameValid, isPhoneValid, isEmailValid, isPasswordValid] = [
    validateName(),
    validatePhone(),
    validateEmail(),
    validatePassword(),
  ];
  if (isNameValid && isPhoneValid && isEmailValid && isPasswordValid) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxW6gt-xJkvaftHUDLN-lOtwWB8gPZlBGiJQJmRYO3FVW6ZwDodlHwNenBcP-5zOsqh/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        form.style.display = "none";
        document.querySelector(".submision-popup").classList.add("active");
        console.log(response);
      })
      .catch((error) => console.error("Error!", error.message));
  }
}

function submitAgain() {
  form.style.display = "block";
  form.reset();
  document.querySelector(".submision-popup").classList.remove("active");
  nameError.innerHTML = "";
  phoneError.innerHTML = "";
  passwordError.innerHTML = "";
  emailError.innerHTML = "";
}
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

function validatePhone() {
  let phone = document.querySelector("#phone").value;
  if (!phone.match(/^\d{10}/)) {
    phoneError.innerHTML = "enter valid phone number";
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateEmail() {
  let email = document.querySelector("#email").value;
  if (!email.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "enter valid email";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

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
