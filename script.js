// ---------------- Dark / Light Mode Toggle ----------------
const themeIcon = document.getElementById('theme-icon');
themeIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeIcon.classList.toggle('fa-sun');
  themeIcon.classList.toggle('fa-moon');
});

// ---------------- Filter Projects ----------------
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if(filter === 'all' || card.dataset.category === filter){
        card.style.display = 'block';
        setTimeout(() => card.style.opacity = '1', 50);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});

// ---------------- Animated Counters ----------------
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace(/,/g, '');
    const increment = target / 200;
    if(count < target){
      counter.innerText = Math.ceil(count + increment).toLocaleString();
      setTimeout(updateCounter, 15);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  updateCounter();
});

// ---------------- Scroll Animations (AOS) ----------------
AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
});
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});
