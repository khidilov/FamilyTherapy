"use strict";

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.classList.add("fade-out");
    loader.addEventListener("transitionend", () => {
      loader.style.display = "none";
      content.style.visibility = "visible";
    });
  }, 100);
});

document.querySelectorAll(".navlist .navlink").forEach((a) => {
  a.addEventListener("click", () => {
    const toggler = document.getElementById("menu-togler");
    if (toggler) toggler.checked = false;
  });
});
