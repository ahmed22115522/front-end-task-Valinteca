// Login Page the user Email displaied from the local storage 

const userEmailLogin = document.getElementById('userEmailLogin')

userEmailLogin.innerText = localStorage.getItem('userEmail')