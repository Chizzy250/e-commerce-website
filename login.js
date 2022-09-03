const feedbackName = document.querySelector("#feedback-name")
const form = document.querySelector("#form")
const user = document.querySelector('#user')
const pass = document.querySelector('#pass')

let storedUsername = localStorage.getItem("username")
let storedPassword = localStorage.getItem("password")

let loginInput = document.querySelector('#login-input')
let loginPass = document.querySelector('#login-pass')



function check(e) {
e.preventDefault()
if (loginInput.value.trim() === "" && loginPass.value.trim()=== "") {
  feedbackName.textContent = "Fill up the empty spaces"
  feedbackName.style.color = "red"
} else {
feedbackName.textContent = ""
}
if (loginInput.value === "") {
  user.textContent="input your username"
  user.style.color = "red"
  } else {
  user.textContent = ""
  }
  if (loginPass.value === "") {
  pass.textContent = "input your password"
  pass.style.color = "red"
  }else {
  pass.textContent = ""
  }
  if (loginInput.value === storedUsername && loginPass.value === storedPassword && loginInput.value !== "" && loginPass.value !== "") {
    window.location = "index.html"
        return false
  } else {
alert("Error")
  }
}

form.addEventListener('submit', check);