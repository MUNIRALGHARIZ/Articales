let menu_icon = document.querySelector('.fa-bars');
let menu = document.querySelector('.links');

// when user click on menu icon
menu_icon.addEventListener("click",_=>{
    menu.classList.toggle('active');
    menu_icon.classList.toggle('fa-xmark');
})