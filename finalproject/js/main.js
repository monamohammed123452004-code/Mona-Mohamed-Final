
  const typed = new Typed(".text", {
    strings: ["a Front-End Developer", "a Web Designer", "a Web Developer"], // الكلمات اللي هتتكتب
    typeSpeed: 100, // سرعة الكتابة
    backSpeed: 50,  // سرعة الحذف
    backDelay: 1000, // وقت الانتظار قبل الحذف
    loop: true      // يعيد الكتابة للأبد
});

 

  animateElements.forEach(el => observer.observe(el));
   const toggleBtn = document.getElementById('themeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = toggleBtn.querySelector('i');
    if(document.body.classList.contains('dark')){
      icon.classList.replace('bx-moon','bx-sun');
    } else {
      icon.classList.replace('bx-sun','bx-moon');
    }
  });

  // Scroll Animation
  const animateElements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));

