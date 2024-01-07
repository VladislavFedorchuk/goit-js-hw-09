const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;

function onFormInput(evt) {
  const formInput = {
    email: evt.currentTarget.elements.email.value.trim(),
    message: evt.currentTarget.elements.message.value.trim(),
  };

  saveData(STORAGE_KEY, formInput);
}

function savedFormText() {
  try {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    textarea.value = savedData.message || '';
    email.value = savedData.email || '';
  } catch (error) {
    console.error('Error while parsing saved data:', error);
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value.trim();
  const textValue = event.currentTarget.elements.message.value.trim();

  if (emailValue === '' || textValue === '') {
    alert('Please fill in all the fields!');
    return;
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

document.addEventListener('DOMContentLoaded', savedFormText);

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);
