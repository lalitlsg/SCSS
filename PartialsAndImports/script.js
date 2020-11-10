let logo = document.getElementById("logo");
let nav = document.getElementById("nav");

let clicked = false;
logo.addEventListener("click", () => {
  clicked = true;
  nav.style.display === "" || nav.style.display === "none"
    ? (nav.style.display = "block")
    : (nav.style.display = "none");
});

window.addEventListener("resize", () => {
  let w = document.documentElement.clientWidth;
  w > 600 ? (nav.style.display = "block") : null;
});
