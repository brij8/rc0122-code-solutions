var $contactform = document.querySelector('#contact-form');

$contactform.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  var controls = {
    name: $contactform.elements.name.value,
    email: $contactform.elements.email.value,
    message: $contactform.elements.message.value
  };
  console.log('controls: ', controls);
  $contactform.reset();
}
