// Робимо активним вибраний план
const plans = document.querySelectorAll('.plan');
plans.forEach((plan) => {
  plan.addEventListener('click', () => {
    plans.forEach((p) => p.classList.remove('active'));
    plan.classList.add('active');
  });
});
// Карусель
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

// Запускаємо карусель із першого елемента
updateCarousel();
