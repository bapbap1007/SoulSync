const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const showhidepass = document.querySelector('img.hidepassword');
const showpass = document.querySelector('.showpasswordText');
const hidepassword = document.querySelector('.hidepasswordText');
const passwordInput = document.querySelector('.ipassword');



showhidepass.addEventListener('click', () => {
    showpass.classList.toggle('display');
    hidepassword.classList.toggle('display');


    if (showpass.classList.contains('display')) {
        passwordInput.setAttribute('type', 'text');
    }
    else {
        passwordInput.setAttribute('type', 'password');
    }

})


