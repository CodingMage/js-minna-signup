console.log('hello');

//Selector
const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const submit = document.querySelector('.submit')
const errormsg1 = document.querySelector('.errormsg1')
const errormsg2 = document.querySelector('.errormsg2')
const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')
const errormsg3 = document.querySelector('.errormsg3')
const email = document.querySelector('.email')

const all = document.querySelectorAll('.all')






//Event Listeners
submit.addEventListener('click', checkform);
// document.addEventListener('change', checkform)
firstname.addEventListener('input', checkname)
lastname.addEventListener('input', checkname1)
email.addEventListener('change', checkemail)
password1.addEventListener('change', checkpasslength)
password2.addEventListener('change', checkpass)





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


    console.log(namepass);
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
    console.log('name', namepass);
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

    console.log('pass1', passwordpass1);
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

    console.log('pass2', passwordpass2);
    enablebtn()



}
let emailpass = false

function checkemail() {
    if (email.value.length > 0) {
        emailpass = true
    }
    console.log('email', emailpass);
    enablebtn()
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
        console.log('all file');
        submit.style.pointerEvents = 'unset'
        submit.style.backgroundColor = 'blue'
    }
}

// if (all.value < 0) {
//     console.log('empty');
// }