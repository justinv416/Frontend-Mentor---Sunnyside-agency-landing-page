const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-list-mobile');
const triangle = document.querySelector('.triangle')

// Function to toggle mobile navigation
const toggleNav = () => {
    mobileNav.classList.toggle('visible');
    triangle.classList.toggle('visible')
}

hamburger.addEventListener('click', toggleNav)

