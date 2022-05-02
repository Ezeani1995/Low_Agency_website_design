const header = document.querySelector("header");
const menuBtn = document.querySelector(".bars");
const closeBtn = document.querySelector(".close");

menuBtn.addEventListener("click", () => {
  header.classList.add("clicked");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("clicked");
});
