const form = document.querySelector('#subscribeForm');
const emailLabel = document.querySelector('#subscribeEmailLabel');
const email = document.querySelector('#subscribeEmail');
const errorIcon = document.querySelector('#subscribeErrorIcon');
const errorText = document.querySelector('#subscribeErrorText');

function handleSubscribe(event) { 
    if(email.validity.typeMismatch || email.value.length == 0) {
       
        event.preventDefault();
        form.classList.add('subscribe--error');
        emailLabel.innerHTML = 'Email Address Error';
        email.setAttribute('aria-describedy', 'subscribeErrorText');
    } 
}

form.addEventListener('submit', handleSubscribe);