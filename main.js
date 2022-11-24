const navToggle = document.querySelector(".mobile-nav-button");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
const iconHam = document.querySelector(".icon-ham");
const IconClose = document.querySelector(".icon-close");

navToggle.addEventListener("click", function () {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

iconHam.addEventListener("click", function () {
  IconClose.style.display = 'block';
  iconHam.style.display = 'none';
});

IconClose.addEventListener("click", function () {
  IconClose.style.display = 'none';
  iconHam.style.display = 'block';
});