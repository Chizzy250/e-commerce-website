const form = document.querySelector('#form')
const feedback = document.querySelector('#feedback')
const firstName = document.querySelector('#first-name')
const surname = document.querySelector('#surname')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const mobileNo = document.querySelector('#mobile')
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const err = document.querySelector('#err')

// Warning messages 
const first = document.querySelector('#first')
const sur = document.querySelector('#sur')
const user = document.querySelector('#user')
const gmail = document.querySelector('#gmail')
const phone = document.querySelector('#phone')
const pass = document.querySelector('#pass')
const conPass = document.querySelector('#conPass')

function store() {
localStorage.setItem("username", username.value)
localStorage.setItem("password", password.value)
}

function validateUser(e){
    e.preventDefault();

    if(username.value.trim() === '' && firstName.value.trim() === '' && surname.value.trim() === '' && email.value.trim() === '' && mobileNo.value.trim() === '' && password.value.trim() === '' && confirmPassword.value.trim() === '') {
        feedback.textContent = 'Input boxes are empty! Please fill-up the form.';
        feedback.style.color="red"
      }else {
     feedback.textContent = ""
    } if (firstName.value.trim() === '') {
      first.textContent = 'Please, enter your first name'
      first.style.color = "red"
      }else {
   first.textContent =""
    } if (surname.value.trim() === '') {
    sur.textContent ='Please, enter your surname'
    sur.style.color= "red"
    }else {
    sur.textContent = ""
    }if (username.value.trim() === '') {
   user.textContent ='Please enter a username!'
   user.style.color = "red"
  }else { 
    user.textContent =""
    } if (mobileNo.value.trim() === '') {
    phone.textContent ='Please, enter your mobile no'
    phone.style.color = "red"
    }else  {
  phone.textContent = ""
   } if(email.value.trim() === '') {
        gmail.textContent = 'Please enter an email!'
        gmail.style.color = "red"
    }else {
      gmail.textContent = ""
      }if(password.value.trim() === '') {
        pass.textContent= 'Please enter a password'
        pass.style.color = "red"
    } else if(confirmPassword.value.trim() === ''){
        conPass.textContent = 'Please enter your confirm password'
        conPass.style.color = "red"
    }else if(confirmPassword.value.trim() !== password.value.trim()|| username.value.trim() === ""){
        conPass.textContent = 'Password doesnt match. Please re-enter again'
        conPass.style.color = "red"
        return false
    }else {
        alert('Submitted!');
        window.location = "login.html"
        return false
    }

}

form.addEventListener('submit', validateUser);
