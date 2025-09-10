document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');

  items.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.parentElement.querySelector('.caption').textContent;
      closeBtn.focus();
    });
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.parentElement.querySelector('.caption').textContent;
        closeBtn.focus();
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active') && e.key === 'Escape') {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    }
});
});