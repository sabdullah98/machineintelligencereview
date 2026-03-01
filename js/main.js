// machineintelligencereview — Main JS

document.addEventListener('DOMContentLoaded', () => {

  // Newsletter form handler
  document.querySelectorAll('.am-newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const input = form.querySelector('input[type="email"]');
      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#00e5a0';
      input.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe →'; }, 3000);
    });
  });

  // Blog filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.blog-card-item').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('am-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.am-cat-card, .am-post-card, .am-widget').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  document.addEventListener('animationend', () => {}, { once: true });

  // Manually trigger visible on already visible elements
  document.querySelectorAll('.am-visible').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });

});

// Called by observer
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = '.am-visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});
