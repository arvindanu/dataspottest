const items = document.querySelectorAll('.solution-item');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const itemTop = rect.top + window.scrollY;

    if(scrollPos >= itemTop && scrollPos < itemTop + rect.height){
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Update scroll wheel
      const wheelProgress = document.querySelector('.wheel-progress');
      const index = Array.from(items).indexOf(item);
      const heightPercent = ((index + 1) / items.length) * 100;
      wheelProgress.style.height = heightPercent + '%';
    }
  });
});


/* ================================
   FAQ Accordion Toggle Functionality
=================================== */
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const faqItem = btn.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Collapse all items and reset icons
    document.querySelectorAll('.faq-item').forEach((i) => {
      i.classList.remove('active');
      i.querySelector('.icon').textContent = '+';
    });

    // Expand clicked one only if it was not active
    if (!isActive) {
      faqItem.classList.add('active');
      faqItem.querySelector('.icon').textContent = '−';
    }
  });
});
