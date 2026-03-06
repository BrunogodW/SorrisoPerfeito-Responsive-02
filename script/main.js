const btnT = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  btnT.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnT.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const navLinks = document.querySelectorAll('#navBar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', (e) => {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
});
//PWA
if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {

        navigator.serviceWorker.register('./pwabuilder-sw.js')
          .then(reg => console.log('Service Worker registrado!', reg))
          .catch(err => console.error('Falha ao registrar:', err));
      });
    }
