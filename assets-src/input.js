console.log("Initialize")

const btnHamburger = document.getElementById("hamburger-button");

btnHamburger.addEventListener('click', function () {
    const navbarLinks = document.getElementsByClassName('normal-menu-items')[0]
    navbarLinks.classList.toggle('active');
});