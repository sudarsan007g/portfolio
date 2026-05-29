const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 8) {
    header.classList.add("elevated");
  } else {
    header.classList.remove("elevated");
  }
});
