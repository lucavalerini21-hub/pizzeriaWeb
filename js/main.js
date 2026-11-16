// Pizzeria Da Giotto - piccole interazioni del menu
// (template fornito dal Project Manager: NON modificare senza autorizzazione)

document.addEventListener('DOMContentLoaded', () => {
  const link = document.querySelectorAll('.site-nav a');

  link.forEach((a) => {
    a.addEventListener('click', (evento) => {
      const destinazione = document.querySelector(a.getAttribute('href'));
      if (!destinazione) {
        return;
      }
      evento.preventDefault();
      destinazione.scrollIntoView({ behavior: 'smooth', block: 'start' });
      destinazione.classList.add('evidenzia');
      setTimeout(() => destinazione.classList.remove('evidenzia'), 1200);
    });
  });

  const anno = new Date().getFullYear();
  const nota = document.querySelector('.nota');
  if (nota) {
    nota.textContent += ' \u00b7 ' + anno;
  }
});
