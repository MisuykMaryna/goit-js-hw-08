import throttle from 'lodash.throttle';
  
const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');

const formData = {};
populateTextarea();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    const message = evt.target.value;
    localStorage.setItem("STORAGE_KEY", message);
}
 
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("STORAGE_KEY");
}

function populateTextarea() {
    const savedMessage = localStorage.getItem("STORAGE_KEY");
    if (savedMessage) {
        formEl.value = savedMessage; 
    }
}