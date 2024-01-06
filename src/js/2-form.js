const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput(evt) {
  const formImput = {};
  formImput.email = evt.currentTarget.elements.email.value.trim();
  formImput.text = evt.currentTarget.elements.message.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formImput));
}

function savedFormText() {
  const savedmessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedmessage) {
    textarea.value = savedmessage.text.trim();
    email.value = savedmessage.email.trim();
  }
}
savedFormText();

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const text = event.currentTarget.elements.message.value.trim();
  if (email === '' || text === '') {
    alert('Please fill in all the fields!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}