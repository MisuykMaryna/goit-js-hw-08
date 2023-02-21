import throttle from 'lodash.throttle';
  
const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');

const formData = {};
populateTextarea();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
   formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
 
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (savedMessage) {
        email.value = savedMessage.email;
        message.value = savedMessage.message;
    }
}