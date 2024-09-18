
const form = document.getElementById('contact-form');
const sendMail = document.getElementById('emailA');

function handleSendEmail(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    if (!name || !email || !phone || !message) {
        alert("Por favor, completa todos los campos antes de enviar el mensaje.");
        return;
    }

    const subject = encodeURIComponent("Correo Empresarial");
    const body = encodeURIComponent(`Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email} ${message}`);

    sendMail.setAttribute('href', `mailto:dmadrigal@kairoscr.net?subject=${subject}&body=${body}`);
    sendMail.click();
}

form.addEventListener('submit', handleSendEmail);
