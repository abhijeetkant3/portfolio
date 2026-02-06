const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animateRing);
  }

  animateRing();

  // contact
(function () {
  emailjs.init("v4FvAmRM0PuvcTbU1"); // PUBLIC KEY
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_mnda2hv",
    "template_j1utjkf",
    this
  ).then(
    () => {
      alert("Message sent successfully 🚀");
      form.reset();
    },
    (error) => {
      alert("Failed to send message 😢");
      console.error("EmailJS Error:", error);
    }
  );
});
// dark mode
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});


const words = [
    "Abhijeet Kant Kumar",
    "a Developer",
    "a Designer"
  ];

  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function typeEffect() {
    const textElement = document.getElementById("text");
    currentWord = words[i];

    if (!isDeleting) {
      textElement.textContent = currentWord.slice(0, j++);
    } else {
      textElement.textContent = currentWord.slice(0, j--);
    }

    if (j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(() => {}, 800);
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 80 : 150);
  }

  typeEffect();