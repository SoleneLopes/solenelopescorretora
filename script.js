// Rolagem suave até seção
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Submissão de formulários (Formspree simulação)
document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Enviando...';
      submitButton.disabled = true;

      setTimeout(() => {
        alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        form.reset();
      }, 2000);
    });
  });
});
