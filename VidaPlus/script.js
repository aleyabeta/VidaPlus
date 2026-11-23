document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const output = form.querySelector('.notice');
      if (output) output.textContent = '¡Gracias! Esta es una demostración: tu consulta no se ha enviado a ningún servidor.';
      form.reset();
    });
  });
});
