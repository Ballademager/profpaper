window.addEventListener("load", loadColors);
// animate visibility
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
