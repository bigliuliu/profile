const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
  menuToggle();
  menuIcon.classList.toggle("scale-105");
  list.addEventListener("click", () => {
    dropdownMenu.classList.remove("flex");
    dropdownMenu.classList.add("hidden");
  });
});

function menuToggle(params) {
  dropdownMenu.classList.toggle("hidden");
  dropdownMenu.classList.toggle("flex");
}
