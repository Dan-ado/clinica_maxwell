document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    this.reset();
});