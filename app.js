const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')




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
      
        window.location = "index12.html";
    } else {
      
        alert("Fill the form completely");
    }
}









hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')

}))


// Typed js
var options = {
    strings: [
        'Elevate your WorkFlow' 
        
    ],
    typeSpeed: 10,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 100,
    backDelay: 2000,
  };

 
  
var typed = new Typed('#hero-titles', options);


// Select the login button with the class .login0
const loginButton = document.querySelector('.login0');

// Select the hero section and loginTab section
const heroSection = document.getElementById('hero-titles');
const loginTab = document.getElementById('loginTab');
const btnPopup = document.querySelector('.popup')
const iconClose = document.querySelector('.icon-close')




// Add a click event listener to the login button
loginButton.addEventListener('click', () => {
    typed.destroy(); // Stop the Typed.js instance
    // Hide the hero section and show the loginTab section
    heroSection.style.display = 'none';
    loginTab.style.display = 'block';
});

iconClose.addEventListener('click', () => {
    loginTab.style.display = 'none';
    heroSection.style.display = 'block';
})



// AOS
AOS.init();