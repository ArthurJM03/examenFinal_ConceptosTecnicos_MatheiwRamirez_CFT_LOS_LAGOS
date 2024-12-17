// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation (optional, extend as needed)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Por favor, completa todos los campos antes de enviar.');
        } else {
            alert('¡Formulario enviado con éxito! Gracias por contactarme.');
        }
    });
}
