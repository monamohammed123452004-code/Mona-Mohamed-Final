
var typed = new Typed(".text", {
    strings: ["Front-End Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});
const btn = document.getElementById("darkModeToggle");

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  btn.innerHTML = "☀️";
}

btn.onclick = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
    btn.innerHTML = "☀️";
  } else {
    localStorage.setItem("mode", "light");
    btn.innerHTML = "🌙";
  }
};
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const contactForm = document.getElementById("contactForm");
const result = document.getElementById("result");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {
    result.innerHTML = "❌ Please fill in all fields!";
    result.style.color = "red";
    return;
  }

  // Simulate sending message
  result.innerHTML = "✅ Message sent successfully!";
  result.style.color = "#00f0ff";

  // Clear form
  contactForm.reset();
});
