const form = document.getElementsByClassName("form-container")[0]
const email = document.getElementsByClassName("form-input")[0]
const password = document.getElementsByClassName("form-input")[1]

const emailMessage = document.getElementsByClassName("form-message")[0]
const passwordMessage = document.getElementsByClassName("form-message")[1]


function submit(e) {
  e.preventDefault()

  emailMessage.style.display = "block"
  if (email.value.includes(".") && email.value.trim() != "" && email.value.length >= 10) {
    emailMessage.innerText = "Email valid"
    emailMessage.classList.add("validated")
    emailMessage.classList.remove("unvalidated")
    email.classList.add("valid")
    email.classList.remove("invalid")
  } else {
    emailMessage.innerText = "Email invalid"
    emailMessage.classList.add("unvalidated")
    emailMessage.classList.remove("validated")
    email.classList.add("invalid")
    email.classList.remove("valid")
  }

  passwordMessage.style.display = "block"
  if (password.value.trim() != "" && password.value.length >= 10) {
    passwordMessage.innerText = "Password valid"
    passwordMessage.classList.add("validated")
    passwordMessage.classList.remove("unvalidated")
    password.classList.add("valid")
    password.classList.remove("invalid")
  } else {
    passwordMessage.innerText = "Password invalid"
    passwordMessage.classList.add("unvalidated")
    passwordMessage.classList.remove("validated")
    password.classList.add("invalid")
    password.classList.remove("valid")
  }
}

form.addEventListener("submit", (e) => submit(e))