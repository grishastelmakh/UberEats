// Eye  Icon

const inputPass = document.getElementById('password');
const eye = document.getElementById('eye');

eye.addEventListener('click', () => {
    if (inputPass.getAttribute('type') === "password") {  // если будет тип "пароль", то надо будет поменять его на текст
        inputPass.setAttribute('type', 'text');
    } else {
        inputPass.setAttribute('type', 'password'); // И наоборот в противном случае
    }
});

// Preloader
window.onload = function(){
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setTimeout(function() {
        preloader.classList.add('preloader-hidden');
    },950)
    }