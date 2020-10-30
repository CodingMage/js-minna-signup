('hello');

//Selector
const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const submit = document.querySelector('.submit')
const errormsg1 = document.querySelector('.errormsg1')
const errormsg2 = document.querySelector('.errormsg2')
const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')
const errormsg3 = document.querySelector('.errormsg3')
const errormsg4 = document.querySelector('.errormsg4')

const email = document.querySelector('.email')
const loginBtn = document.querySelector('.login-btn')
const loginSubmit = document.querySelector('.login-submit')

const signup = document.querySelector('.signup')
const login = document.querySelector('.login')
const loginEmail = document.querySelector('.login-email')
const loginPassword = document.querySelector('.login-password')






const all = document.querySelectorAll('.all')






//Event Listeners
submit.addEventListener('click', checkform);
// document.addEventListener('change', checkform)
firstname.addEventListener('input', checkname)
lastname.addEventListener('input', checkname1)
email.addEventListener('change', checkemail)
loginEmail.addEventListener('change', checkemail)

password1.addEventListener('change', checkpasslength)
loginPassword.addEventListener('change', checklen)

password2.addEventListener('change', checkpass)
loginBtn.addEventListener('click', logshow);
loginSubmit.addEventListener('click', logsubmit);







//fuinctions


let namepass = false

function checkname() {
    errormsg1.innerHTML = '';
    errormsg2.innerHTML = '';


    var re = /^[A-Za-z]+$/;
    if (re.test(firstname.value)) {
        namepass = true

    } else if (!re.test(firstname.value)) {
        errormsg1.innerHTML = 'invalid name'
        namepass = false

    }


    enablebtn()
}

function checkname1() {
    errormsg2.innerHTML = '';

    var re = /^[A-Za-z]+$/;
    if (re.test(lastname.value) && lastname.value.length > 0) {
        namepass = true

    } else if (!re.test(lastname.value) && lastname.value.length > 0) {
        // alert('Invalid Name.');
        errormsg2.innerHTML = 'invalid name'
        namepass = false


    }
    ('name', namepass);
    enablebtn()

}
let passwordpass1 = false

function checkpass() {
    errormsg2.innerHTML = ''
    errormsg3.innerHTML = ''
    if (password1.value !== password2.value) {
        errormsg3.innerHTML = 'password not the same'
        passwordpass1 = false


    } else {
        passwordpass1 = true
    }

    enablebtn()


}
let passwordpass2 = false

function checkpasslength() {
    errormsg2.innerHTML = ''
    errormsg3.innerHTML = ''
    if (password1.value.length < 8) {
        errormsg3.innerHTML = 'password is not long enough'
        passwordpass2 = false


    } else if (password1.value !== password2.value && password2.value.length > 0) {
        errormsg3.innerHTML = 'password not the same'
        passwordpass2 = false


    } else if (!password1.value.length < 8) {
        passwordpass2 = true

    } else {

        errormsg3.innerHTML = ''

    }

    enablebtn()



}
let emailpass = false

function checkemail() {
    if (email.value.length > 0 || loginEmail.value.length > 0) {
        emailpass = true
    }
    enablebtn()
    enablebtn1()
}

function checkform(e) {
    e.preventDefault();

    lastname.value = ''
    firstname.value = ''
    email.value = ''
    password1.value = ''
    password2.value = ''



    submit.innerHTML = 'Done and Submited '

}

function enablebtn() {

    if (namepass && emailpass && passwordpass2 && passwordpass1) {
        ('all file');
        submit.style.pointerEvents = 'unset'
        submit.style.backgroundColor = 'blue'
    }
}

function logshow() {
    signup.style.display = 'none'
    login.style.display = 'flex'


}

let loginPasswordpass = false

function checklen() {
    if (loginPassword.value.length < 8) {
        errormsg4.innerHTML = 'password is not long enough'
        loginPasswordpass = false


    } else {
        errormsg4.innerHTML = ''
        loginPasswordpass = true

    }
    enablebtn1()
}

function enablebtn1() {

    if (emailpass && loginPasswordpass) {
        loginSubmit.style.pointerEvents = 'unset'
        loginSubmit.style.backgroundColor = 'blue'
    }
}


function logsubmit(e) {
    e.preventDefault();

    loginEmail.value = ''
    loginPassword.value = ''
    loginSubmit.innerHTML = 'Logged in successfully'



}