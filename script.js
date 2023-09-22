// Intersection Observer
const observer = new IntersectionObserver((entries) => [
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  }),
]);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

// Theme-switcher
window.addEventListener("load", loadColors);
const sel = document.querySelector("select");
sel.addEventListener("change", clrSwitch);
const themeValue = localStorage.getItem("theme");
// animate visibility
function clrSwitch() {
  if (sel.value === "dark") {
    document.querySelector("body").dataset.theme = "dark";
    localStorage.setItem("theme", sel.value);
  } else if (sel.value === "light") {
    document.querySelector("body").dataset.theme = "light";
    localStorage.setItem("theme", sel.value);
  } else if (sel.value === "dust") {
    document.querySelector("body").dataset.theme = "dust";
    localStorage.setItem("theme", sel.value);
  }
}
function loadColors() {
  if (themeValue) {
    document.querySelector("body").dataset.theme = themeValue;
    sel.value = themeValue;
  } else {
    document.querySelector("body").dataset.theme = "dark";
  }
  // console.log("***********");
}

// cursor
const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // mousestop
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
