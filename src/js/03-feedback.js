import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[name=email]');
const textarea = document.querySelector('textarea[name=message]');
form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

autoFormFill();

function onInputChange(e) {
    formData[e.target.name] = e.target.value;
    const stringifiedFormData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringifiedFormData);
};

function autoFormFill() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedFormData) {
input.value = savedFormData.email ?? "";
textarea.value = savedFormData.message ?? "";
    }
}

function onFormSubmit(e) {
e.preventDefault();

console.log(formData);

e.target.reset();
localStorage.removeItem(STORAGE_KEY);
}

