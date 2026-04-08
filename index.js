document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navMenu = document.querySelector(".nav ul");
//   const langSelect = document.getElementById("language-select");

//   menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("show");
//   });

//   langSelect.addEventListener("change", () => {
//     const lang = langSelect.value;
//     document.querySelectorAll("[data-en]").forEach(el => {
//       el.textContent = el.getAttribute(`data-${lang}`);
//     });
//   });
// });