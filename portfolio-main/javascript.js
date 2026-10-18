document.addEventListener('DOMContentLoaded', () => {
  const humburger = document.querySelector('.humburger'); 
  const navLinks = document.querySelector('.nav-links');
  humburger.addEventListener("click", () => {
      humburger.classList.toggle("active");
      navLinks.classList.toggle("active");
  });

  const skillsSection = document.querySelector('.skills-section');
  const skillBars = document.querySelectorAll('.skills-progress'); 
  const skillNumbers = document.querySelectorAll('.skill-number'); 
  let animateSkills = false; 

  function skillAnimate() { 
      if (animateSkills) return;
      skillBars.forEach((bar, index) => {
          const percent = parseInt(bar.getAttribute('data-percent'));
          bar.style.width = data-percent + '%';
          let currentPercent = 0;
          const updateCounter = setInterval(() => {
              if (currentPercent < percent) {
                  currentPercent++;
                  skillNumbers[index].textContent = currentPercent; 
              } else {
                  clearInterval(updateCounter);
              }
          }, 20); 
      });
      animateSkills = true; 
  }

  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              skillAnimate(); 
              skillsObserver.unobserve(entry.target);
          }
      });
  }, observerOptions); 

  skillsObserver.observe(skillsSection); 

  AOS.init(); 
});
