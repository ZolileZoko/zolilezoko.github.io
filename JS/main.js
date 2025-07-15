// Confirm JS is working
console.log("main.js loaded");

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Placeholder for dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-theme");
}

// TODO: Hook this up to a button in the header in the next phase
