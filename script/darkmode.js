const btnD = document.getElementById('toggleTheme');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  btnD.textContent = '☀️';
}

btnD.addEventListener('click', () => {
  // Spin suave no botão
  btnD.style.transform = 'scale(0.8) rotate(180deg)';
  btnD.style.transition = 'transform 0.35s ease';

  setTimeout(() => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    btnD.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    btnD.style.transform = 'scale(1) rotate(0deg)';
  }, 180);
});
