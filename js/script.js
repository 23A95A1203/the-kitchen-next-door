const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const items = document.querySelectorAll('.carousel-item');

const gap = 30;
const itemWidth = 300 + gap;
let currentIndex = 0;
const visibleItems = Math.floor(document.querySelector('.carousel-view').offsetWidth / itemWidth);
const maxIndex = items.length - visibleItems;

function updateCarousel() {
  const offset = currentIndex * itemWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

// Quantity logic
items.forEach((item) => {
  const plus = item.querySelector('.plus');
  const minus = item.querySelector('.minus');
  const qty = item.querySelector('.qty');

  plus.addEventListener('click', () => {
    qty.textContent = parseInt(qty.textContent) + 1;
  });

  minus.addEventListener('click', () => {
    const count = parseInt(qty.textContent);
    if (count > 0) qty.textContent = count - 1;
  });
});

// Modal Logic
const modal = document.getElementById('dishModal');
const requestBtn = document.querySelector('.request-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const submitBtn = document.querySelector('.submit-btn');

requestBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

cancelBtn.addEventListener('click', closeModal);
submitBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// === Video Play/Pause ===
const video = document.getElementById("promoVideo");
const playIcon = document.getElementById("playIcon");
const videoContainer = document.getElementById("video-container");

videoContainer.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.style.display = "none";
  } else {
    video.pause();
    playIcon.style.display = "block";
  }
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

const viewMoreBtn = document.getElementById('viewMoreBtn');
const kitchenGrid = document.getElementById('kitchenGrid');

viewMoreBtn?.addEventListener('click', () => {
  kitchenGrid.classList.toggle('expanded');
  viewMoreBtn.textContent = kitchenGrid.classList.contains('expanded')
    ? 'Show Less'
    : 'View More Dishes';
});
const viewBtn = document.getElementById("viewMoreBtn");
const grid = document.getElementById("kitchenGrid");

viewBtn?.addEventListener("click", () => {
  const hiddenCards = grid.querySelectorAll(".kitchen-card:not(.visible)");
  hiddenCards.forEach(card => card.classList.add("visible"));

  viewBtn.style.display = "none"; // hide button after showing all
});
document.addEventListener("DOMContentLoaded", () => {
  const viewBtn = document.getElementById("viewMoreBtn");
  const grid = document.getElementById("kitchenGrid");

  if (viewBtn && grid) {
    viewBtn.addEventListener("click", () => {
      const hiddenCards = grid.querySelectorAll(".kitchen-card:not(.visible)");
      hiddenCards.forEach(card => card.classList.add("visible"));
      viewBtn.style.display = "none";
    });
  }
});
