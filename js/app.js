function scrollEffect() {
  let nav = document.querySelector("nav")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("border-bottom")
      nav.classList.add("border-bottom")
      nav.classList.remove("py-4")
      nav.classList.add("nav-bar-sticky")
    } else {
      nav.classList.remove("border-bottom")
      nav.classList.remove("border-secondary")
      nav.classList.add("py-4")
      nav.classList.remove("nav-bar-sticky")
    }
  })
}

document.addEventListener("DOMContentLoaded", scrollEffect)
