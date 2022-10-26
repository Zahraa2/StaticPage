// toggle the top nav

const nav = document.querySelector(".navbar"); 

let lastScrollY = window.scrollY;

window.addEventListener("scroll",() => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("toggle-nav")

  } else {
    nav.classList.remove("toggle-nav")
  }
})