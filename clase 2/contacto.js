const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Contactandote';

   const serviceID = 'service_irjr72f';
   const templateID = 'template_1kqh0jb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar Email';
      alert(JSON.stringify(err));
    });
});