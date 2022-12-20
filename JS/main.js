const formInputs = document.querySelectorAll('.formInputs')

let formData = {
        username : "",
        email : "",
        password : "",
        password_confirmation : ""
}

// Add Event Listner to fill the form data
for(input of formInputs){
    input.addEventListener('keyup', (e) => {
        const {name, value} = e.target
        formData = {...formData, [name] : value}
    })
}

// Api Function

const checkData = async (form) => {
    const res = await fetch('https://goldblv.com/api/hiring/tasks/register',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(form)
    })
    const data = res.json()
    return data
}

// add true and false statment to prevent sending unecessarry requests to the server
let userNameValid = false;
let emailValid = false;
let passwordValid = false;
let passwordConfirmationValid = false;

// Form Submit Function

const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    if(userNameValid && emailValid && passwordValid && passwordConfirmationValid){
        const {errors, email} = await checkData(formData)
        if(errors){
            passwordMessage.classList.remove('d-none')
            passwordMessage.classList.add('d-block')
            userPassword.classList.add('is-invalid')
            userPassword.classList.remove('is-valid')
            passwordMessage.innerHTML = `<span>${errors.password[0]}</span>`
        }else{
            localStorage.setItem('userEmail', email)
            window.location.href = "login.html";
        }
    }
    
})

// Regex and form validation

// UserName Check

const userName = document.getElementById('userName')
const userNameMessage = document.getElementById('userNameMessage')

const regexUser = /^[A-Za-z][A-Za-z0-9]{3,13}[A-Za-z]$/

userName.addEventListener('change', () => {
    if (userName.value === "") {
        userNameMessage.classList.add('d-block')
        userName.classList.add('is-invalid')
        userName.classList.remove('is-valid')
        userNameMessage.innerHTML = '<span>UserName Is Requierd</span>'
        userNameValid = false;
    }else{
        if (regexUser.test(userName.value)) {
            userName.classList.add('is-valid')
            userName.classList.remove('is-invalid')
            userNameMessage.classList.add('d-none')
            userNameMessage.classList.remove('d-block')
            userNameValid = true;
        }else{
            userName.classList.add('is-invalid')
            userName.classList.remove('is-valid')
            userNameMessage.classList.add('d-block')
            userNameMessage.classList.remove('d-none')
            userNameMessage.innerHTML = '<span> Username must consist of 5 to 15 characters, only letters and numbers are allowed, with no numbers at the beginning or the end.</span>'
            userNameValid = false;
        }
    }

})

// Email Check

const userEmail = document.getElementById('email')
const userEmailMessage = document.getElementById('emailMessage')

const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

userEmail.addEventListener('change', () => {
    if (userEmail.value === "") {
        userEmailMessage.classList.add('d-block')
        userEmail.classList.add('is-invalid')
        userEmail.classList.remove('is-valid')
        userEmailMessage.innerHTML = '<span>Email Is Requierd</span>'
        emailValid = false;
    }else{
        if (regexEmail.test(userEmail.value)) {
            userEmail.classList.add('is-valid')
            userEmail.classList.remove('is-invalid')
            userEmailMessage.classList.add('d-none')
            userEmailMessage.classList.remove('d-block')
            emailValid = true;
        }else{
            userEmail.classList.add('is-invalid')
            userEmail.classList.remove('is-valid')
            userEmailMessage.classList.add('d-block')
            userEmailMessage.classList.remove('d-none')
            userEmailMessage.innerHTML = '<span>Please Enter a valid email example : abc@google.com</span>'
            emailValid = false;
        }
    }

})

// Password Check

const userPassword = document.getElementById('password')
const passwordMessage = document.getElementById('passwordMessage')

const regexPassword = /[A-Za-z0-9]{8,}/

userPassword.addEventListener('change', () => {
    if (userPassword.value === "") {
        passwordMessage.classList.add('d-block')
        userPassword.classList.add('is-invalid')
        userPassword.classList.remove('is-valid')
        passwordMessage.innerHTML = '<span>Password Is Requierd</span>'
        passwordValid = false;
    }else{
        if (regexPassword.test(userPassword.value)) {
            userPassword.classList.add('is-valid')
            userPassword.classList.remove('is-invalid')
            passwordMessage.classList.add('d-none')
            passwordMessage.classList.remove('d-block')
            passwordValid = true;
        }else{
            userPassword.classList.add('is-invalid')
            userPassword.classList.remove('is-valid')
            passwordMessage.classList.add('d-block')
            passwordMessage.classList.remove('d-none')
            passwordMessage.innerHTML = '<span>Password must be at least 8 characters</span>'
            passwordValid = false;
        }
    }

})

//  Password Confirmation Check 

const userPasswordConfirmation = document.getElementById('rePassword')
const passwordConfirmationMessage = document.getElementById('rePasswordMessage')

userPasswordConfirmation.addEventListener('change', () => {
    if (userPasswordConfirmation.value === "") {
        passwordConfirmationMessage.classList.add('d-block')
        userPasswordConfirmation.classList.add('is-invalid')
        userPasswordConfirmation.classList.remove('is-valid')
        passwordConfirmationMessage.innerHTML = '<span>Password Confirmation Is Requierd</span>'
        passwordConfirmationValid = false;
    }else{
        if(userPasswordConfirmation.value === userPassword.value){
            userPasswordConfirmation.classList.add('is-valid')
            userPasswordConfirmation.classList.remove('is-invalid')
            passwordConfirmationMessage.classList.add('d-none')
            passwordConfirmationMessage.classList.remove('d-block')
            passwordConfirmationValid = true;
        }else{
            userPasswordConfirmation.classList.add('is-invalid')
            userPasswordConfirmation.classList.remove('is-valid')
            passwordConfirmationMessage.classList.add('d-block')
            passwordConfirmationMessage.classList.remove('d-none')
            passwordConfirmationMessage.innerHTML = '<span>Password confirmation is not matched the password</span>'
            passwordConfirmationValid = false;
        }
    }
})




