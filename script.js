// Отримуємо всі кнопки
const buttons = document.querySelectorAll('.select-btn');

// Додаємо подію для кожної кнопки
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Спочатку знімаємо клас 'active' з усіх карток
    document.querySelectorAll('.plan').forEach(plan => {
      plan.classList.remove('active');
    });

    // Тепер додаємо клас 'active' тільки до тієї картки, де натиснули кнопку
    const plan = this.closest('.plan'); // Отримуємо найближчого батька-картку
    plan.classList.add('active');
  });
});
