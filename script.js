const xButton = document.querySelector(".x");
const bars = document.querySelector("#menu-bars");
const navbarLinks = document.querySelector(".navbar_links");


if(bars){
    bars.addEventListener('click', () => {
        navbarLinks.classList.add('active');
    } )
}

if(xButton){
    xButton.addEventListener('click', () => {
        navbarLinks.classList.remove('active')
    });
}