// PRELOADER 

window.onload = function(){
let preloader = document.getElementById('preloader');
preloader.classList.add('hide-preloader');
setTimeout(function() {
    preloader.classList.add('preloader-hidden');
},950)
}

// Basket
const basketLink = document.querySelector('#basket-link').onclick = function(){
    alert('Кнопка пока что не работает. Она находится в разработке');
}