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

function showCloseIcon() {
  if (!iconHam.classList.contains('hidden')) {
    iconHam.classList.add('hidden');
    IconClose.classList.remove('hidden');
  } else if(iconHam.classList.contains('hidden')) {
    iconHam.classList.remove('hidden');
    IconClose.classList.add('hidden');
  }
}

navToggle.addEventListener('click', showCloseIcon);