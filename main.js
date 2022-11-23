const navToggle = document.querySelector(".mobile-nav-button");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", function () {
    primaryNav.classList.toggle('opened');
});
