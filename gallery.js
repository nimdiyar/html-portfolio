let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  const colorPicker = document.getElementById('color-picker');
  const fontSelect = document.getElementById('font-select');

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      currentIndex = index;
      showModal();
      hideHeaderAndNav();
      hideFooter();
    });
  });

  prevBtn.addEventListener('click', function() {
    changeImage(-1);
  });

  nextBtn.addEventListener('click', function() {
    changeImage(1);
  });

  function showModal() {
    modal.style.display = 'block';
    modalImg.src = galleryItems[currentIndex].querySelector('img').src;
    modalDescription.textContent = galleryItems[currentIndex].getAttribute('data-description');
  }

  function changeImage(step) {
    currentIndex += step;
    if (currentIndex >= galleryItems.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = galleryItems.length - 1;
    }
    modalImg.src = galleryItems[currentIndex].querySelector('img').src;
    modalDescription.textContent = galleryItems[currentIndex].getAttribute('data-description');
  }

  function closeModal() {
    modal.style.display = 'none';
    showHeaderAndNav();
    showFooter();
  }

  function hideHeaderAndNav() {
    header.style.display = 'none';
    nav.style.display = 'none';
  }

  function showHeaderAndNav() {
    header.style.display = 'flex';
    nav.style.display = 'block';
  }

  function hideFooter() {
    footer.style.display = 'none';
  }


  function showFooter() {
    footer.style.display = 'block';
  }

  document.querySelector('.close').addEventListener('click', closeModal);

  colorPicker.addEventListener('change', function() {
    setDescriptionColor(this.value);
  });

  fontSelect.addEventListener('change', function() {
    setDescriptionFont(this.value);
  });

  function setDescriptionColor(color) {
    modalDescription.style.color = color;
  }

  function setDescriptionFont(font) {
    modalDescription.style.fontFamily = font;
  }

});

