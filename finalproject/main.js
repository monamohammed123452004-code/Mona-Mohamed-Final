var typed=new Typed(".text",{
    strings:["","Web Designer","Web Developer","Front End Developer"],
    typeSpeed:500,
    BackSpeed:500,
    backDelay:1000,
    
    loop:true
})

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
};

document.querySelector(".prev").onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
};

const bars = document.querySelectorAll(".bar");

function animateSkills() {
    bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
}

window.addEventListener("scroll", () => {
    const section = document.querySelector("#skills");
    const pos = section.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
        animateSkills();
    }
});


const elements = document.querySelectorAll(
  ".contact-hero, .contact-card, .faq-item"
);

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});


elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s ease";
});



const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    faqItems.forEach(other => {
      if (other !== item) {
        other.classList.remove("active");
      }
    });
  });
});



function copyEmail() {
  const email = "your@email.com";
  navigator.clipboard.writeText(email);
  alert("Email copied ✅");
}



const cta = document.querySelector(".cta-btn");

if (cta) {
  cta.addEventListener("click", () => {
    cta.innerText = "Sending...";
    
    setTimeout(() => {
      cta.innerText = "Sent ✅";
    }, 1500);
  });
}

// Contact Form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields!");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email!");
            return;
        }

        alert("Message sent successfully ✅");

        form.reset();
    });
});