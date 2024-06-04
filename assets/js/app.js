'use strict';
const signupContent = document.querySelector('.wrapper');
const form = document.querySelector('form');
const inputEmail = document.querySelector('input');
const regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorMessage = document.querySelector('.error');
const successMessage = document.querySelector('.success-message');
const closeSuccessMessage = document.querySelector('.close-success-message');
const clientEmail = document.querySelector('#client-email');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputEmail.value.match(regex)) {
    signupContent.classList.add('hidden');
    successMessage.classList.remove('hidden');
    clientEmail.textContent = inputEmail.value;
  } else {
    errorMessage.classList.remove('hidden');
  }
});

closeSuccessMessage.addEventListener('click', () => {
  successMessage.classList.add('hidden');
  signupContent.classList.remove('hidden');
  inputEmail.value = '';
});
