const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstname = first.value.trim();
    var lastname = last.value.trim();
    var emailValue = email.value.trim();
    var password = pass.value.trim();
    var pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstName === ''){
        errorFunc(first, 'First Name cannot be empty')
    }
    else {
        successFunc(first)
    }
    if (lastName === ''){
        errorFunc(last, 'Last Name cannot be empty')
    }
    else {
        successFunc(first)
    }
    if (emailValue === ''){
        errorFunc(email, 'Email cannot be empty')
    } else if(!emailValue.match(pattern)){
        errorFunc(email, 'Looks like not an email')
    }
    else {
        successFunc(first)
    }
    if (passwordValue === ''){
        errorFunc(pass, 'Password cannot be empty')
    }
    else {
        successFunc(first)
    }
})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    if ( req !== email){
        req.value = ' ';
    } else {
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req){
    req.className += 'success'
}