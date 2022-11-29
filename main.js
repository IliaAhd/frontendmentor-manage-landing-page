const navToggle = document.querySelector(".mobile-nav-button");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
const iconHam = document.querySelector(".icon-ham");
const iconClose = document.querySelector(".icon-close");

navToggle.addEventListener("click", function () {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

navToggle.addEventListener("click", function () {
  iconHam.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});
