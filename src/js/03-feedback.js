import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input'),
  messageInput: document.querySelector('textarea'),
};

const formData = {};
const parsedStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

const checkStorage = () => {
  if (parsedStorage !== null) {
    const { email, message } = parsedStorage;

    try {
      refs.emailInput.value = email;
      refs.messageInput.value = message;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
};

checkStorage();

const saveFormInput = e => {
  const { name, value } = e.target;

  if (name === 'email') {
    formData.email = value;
  } else {
    formData.message = value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const getData = e => {
  e.preventDefault();

  console.log(localStorage.getItem('feedback-form-state'));

  refs.form.reset();

  localStorage.removeItem('feedback-form-state');
};

refs.form.addEventListener('input', throttle(saveFormInput, 500));

refs.form.addEventListener('submit', getData);
