
(function() {
    emailjs.init("PsmMepGi8NRf9cvAc"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('Developer-web', 'template_kgci70l', this)
        .then(function(response) {
            alert('Correo enviado con éxito!', response.status, response.text);
        }, function(error) {
            alert('Hubo un error al enviar el correo...', error);
        });
});

function makeProjectItemsClickable() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            if (!event.target.classList.contains('link')) {
                const link = item.querySelector('.link');
                if (link) {
                    link.click();
                }
            }
        });
    });
}

makeProjectItemsClickable();
