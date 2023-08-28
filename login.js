const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');



registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
})




function login() {
  

    if (eml.value && psw.value) {
        localStorage.setItem("email", eml);
        localStorage.setItem("password", psw);
        alert("Login Successful");
        window.location = "index.html";
    } else {
      
        alert("Fill the form completely");
    }
}






