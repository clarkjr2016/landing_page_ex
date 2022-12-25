const toggleElement = document.querySelector(".toggle-button");
const navBarLinks = document.querySelector("ul");

toggleElement.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
