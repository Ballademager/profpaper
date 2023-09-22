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

// Language Switcher
// const switchInput = document.querySelector("#languages");

// switchInput.addEventListener("change", () => {
//   if (switchInput.checked) {
//     console.log("english");

//   } else {
//     console.log("danish");
//   }
// });
const languageData = {
  danish: [
    {
      id: "headline",
      text: "FRONTEND DEVELOPER",
    },
    {
      id: "about-me",
      text: "Om mig",
    },
    {
      id: "p1",
      text: "Jeg er en entusiastisk multimediedesigndesignstuderende med en brændende interesse for frontendudvikling. Jeg holder af at bringe kreativitet og teknologi sammen for at skabe unikke og finurlige designløsninger. Jeg stræber efter at blive dygtig til at omsætte kreative koncepter til kodet virkelighed.",
    },
    {
      id: "internship",
      text: "Praktik 2024",
    },
    {
      id: "p2",
      text: "Jeg holder af at have et design eller en visuel funktionalitet foran mig og effektivt eksekvere kodningen for at bringe det til live. Min glæde ligger i at tilegne mig ny viden om kodemuligheder og anvende denne viden i mine projekter.",
    },
    {
      id: "p3",
      text: "Mit mål under min praktik er at forbedre mine færdigheder inden for JavaScript, især i forhold til React eller andre frameworks. Jeg er fast besluttet på at dygtiggøre mig på disse områder og skabe værdifulde bidrag til de projekter jeg bliver en del af.",
    },
    {
      id: "p4",
      text: "Jeg ser frem til at bringe min passion og tekniske ekspertise til en praktikplads og bidrage til spændende projekter inden for frontendudvikling og multimediedesign.",
    },
    {
      id: "myskills",
      text: "Mine færdigheder",
    },
    {
      id: "codelang",
      text: "HTML/CSS/JavaScript:",
    },
    {
      id: "p5",
      text: "Jeg har en solid forståelse for grundlæggende webudviklingssprog som HTML, CSS og JavaScript. Jeg er altid nysgerrig efter at udforske de utallige muligheder, der ligger inden for disse sprog, især når det kommer til dynamisk styling og interaktioner.",
    },
    {
      id: "p6",
      text: "Jeg har erfaring med at arbejde dynamisk med data og strukturere det, hvilket hjælper med at forbedre brugeroplevelsen i mine projekter.",
    },
    {
      id: "p7",
      text: "React: Jeg har erfaring med at arbejde komponentbaseret ved brug af Astro og jeg er i gang med at udvikle mine færdigheder inden for React, hvilket vil give mig mulighed for at skabe moderne og responsive webapplikationer.",
    },
    {
      id: "p8",
      text: "Databaseintegration: Jeg er i stand til at arbejde med indhold fra databaser, hvilket udvider mine muligheder for at levere dynamisk og skræddersyet indhold til brugerne.",
    },
    {
      id: "designtools",
      text: "WEBDESIGN",
    },
    {
      id: "p9",
      text: "Udover mine tekniske færdigheder er jeg bekendt med brugen af designværktøjer som Figma og videoredigeringssoftware som Premiere Pro. Jeg har en passion for at kombinere design og teknologi for at skabe visuelt imponerende og funktionelle løsninger.",
    },
    {
      id: "project_headline",
      text: "Projekter",
    },
  ],
  english: [
    {
      id: "headline",
      text: "FRONTEND DEVELOPER",
    },
    {
      id: "about-me",
      text: "About me",
    },
    {
      id: "p1",
      text: "I am an enthusiastic multimedia design student with a burning interest in frontend development. I enjoy bringing creativity and technology together to create unique and imaginative design solutions. I strive to become proficient in translating creative concepts into coded reality.",
    },
    {
      id: "internship",
      text: "Internship 2024",
    },
    {
      id: "p2",
      text: "I enjoy having a design or visual functionality in front of me and efficiently executing the coding to bring it to life. My joy lies in acquiring new knowledge about coding possibilities and applying this knowledge in my projects.",
    },
    {
      id: "p3",
      text: "My goal during my internship is to enhance my skills in JavaScript, especially in relation to React or other frameworks. I am determined to excel in these areas and make valuable contributions to the projects I become a part of.",
    },
    {
      id: "p4",
      text: "I look forward to bringing my passion and technical expertise to an internship and contributing to exciting projects in frontend development and multimedia design.",
    },
    {
      id: "myskills",
      text: "My Skills",
    },
    {
      id: "codelang",
      text: "HTML/CSS/JavaScript:",
    },
    {
      id: "p5",
      text: "I have a solid understanding of fundamental web development languages like HTML, CSS, and JavaScript. I am always curious to explore the countless possibilities within these languages, especially when it comes to dynamic styling and interactions.",
    },
    {
      id: "p6",
      text: "I have experience working dynamically with data and structuring it, which helps enhance the user experience in my projects.",
    },
    {
      id: "p7",
      text: "React: I have experience working with component-based development using Astro, and I am in the process of developing my skills in React, which will enable me to create modern and responsive web applications.",
    },
    {
      id: "p8",
      text: "Database Integration: I am capable of working with content from databases, expanding my possibilities to deliver dynamic and tailored content to users.",
    },
    {
      id: "designtools",
      text: "Web Design",
    },
    {
      id: "p9",
      text: "In addition to my technical skills, I am familiar with the use of design tools like Figma and video editing software like Premiere Pro. I have a passion for combining design and technology to create visually stunning and functional solutions.",
    },
    {
      id: "project_headline",
      text: "Projects",
    },
  ],
};
const checkbox = document.getElementById("languages");
const langValue = localStorage.getItem("lang");
let selectedLanguage;
loadLang();

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    selectedLanguage = "english";
    localStorage.setItem("lang", selectedLanguage);
  } else {
    selectedLanguage = "danish";
    localStorage.setItem("lang", selectedLanguage);
  }

  updateContent(selectedLanguage);
});

function loadLang() {
  if (langValue) {
    selectedLanguage = langValue;
    checkbox.checked = selectedLanguage === "english";
  } else {
    selectedLanguage = "danish";
  }

  updateContent(selectedLanguage);
}

function updateContent(language) {
  languageData[language].forEach((item) => {
    const element = document.getElementById(item.id);
    if (element) {
      element.textContent = item.text;
    }
  });
}

// ---- cursorstuff ----
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
  timeout = setTimeout(mouseStopped, 2000);
});
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// Theme-switcher
// window.addEventListener("load", loadColors);
// const sel = document.querySelector("select");
// sel.addEventListener("change", clrSwitch);
// const themeValue = localStorage.getItem("theme");
// // animate visibility
// function clrSwitch() {
//   if (sel.value === "dark") {
//     document.querySelector("body").dataset.theme = "dark";
//     localStorage.setItem("theme", sel.value);
//   } else if (sel.value === "light") {
//     document.querySelector("body").dataset.theme = "light";
//     localStorage.setItem("theme", sel.value);
//   } else if (sel.value === "dust") {
//     document.querySelector("body").dataset.theme = "dust";
//     localStorage.setItem("theme", sel.value);
//   }
// }
// function loadColors() {
//   if (themeValue) {
//     document.querySelector("body").dataset.theme = themeValue;
//     sel.value = themeValue;
//   } else {
//     document.querySelector("body").dataset.theme = "dark";
//   }
//   // console.log("***********");
// }
