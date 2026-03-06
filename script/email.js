emailjs.init('X3ioUT_7jY7TmYC5-');

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7w6pi5m', 'template_8sdskgl', e.target)
        .then(() => {
            alert('Mensagem enviada com sucesso!');
            document.getElementById("name").value = "";
            document.getElementById("telefone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("CEP").value = "";
            document.getElementById("endereco").value = "";
            document.getElementById("message").value = "";
        })
        .catch((err) => {
            console.log(err);
            alert('Erro ao enviar.');
        });
});