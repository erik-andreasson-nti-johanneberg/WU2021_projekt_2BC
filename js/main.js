let menuButton = document.querySelector(".menubutton");
menuButton.addEventListener('click',showMenu);

function showMenu(){
    let menu = document.querySelector(".menubutton .menu")
    menu.classList.toggle("show");

    fadeLayer.classList.toggle("visible");
}
