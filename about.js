let namn = document.getElementById('name')
let knapp = document.querySelector('#send')
let error = document.querySelector('#errors')
let p = document.querySelector('#greeting')
let email = document.getElementById('email')
let nummer = document.getElementById('nummer')



error.style = 'display: true'
knapp.disabled = true



document.querySelector('#send').addEventListener('click', event => {
  console.log(event.target.value)
  document.querySelector('p').textContent = 'Tack För Din Bokning, du får bekräftelse på mejl  ' +
    document.querySelector('#name').value + '!'

})

document.querySelector('#name').addEventListener('input', event => {
  let namn = document.getElementById('name')
  let mail = document.getElementById('email')
  let nummer = document.getElementById('nummer')
  if (nummer.value === '' || mail.value === '' || ValidateEmail(mail) === false || namn.value === '') {
    error.style = 'display: true'
    knapp.disabled = true

  }
  else {
    knapp.disabled = false
    error.style = 'display: none'
  }
})

//ref: https://www.w3resource.com/javascript/form/email-validation.php
function ValidateEmail(inputText) {
  console.dir("ds")
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    // alert("Valid email address!");
    //document.form1.text1.focus();
    return true;
  }
  else {
    //alert("You have entered an invalid email address!");
    //document.form1.text1.focus();
    return false;
  }
}

document.querySelector('#email').addEventListener('input', event => {
  let mail = document.getElementById('email')
  let namn = document.getElementById('name')
  let nummer = document.getElementById('nummer')

  if (nummer.value === '' || mail.value === '' || ValidateEmail(mail) === false || namn.value === '') {
    error.style = 'display: true'
    knapp.disabled = true

  }
  else {
    knapp.disabled = false
    error.style = 'display: none'
  }
})


document.querySelector('#nummer').addEventListener('input', event => {
  let mail = document.getElementById('email')
  let namn = document.getElementById('name')
  let nummer = document.getElementById('nummer')


  if (nummer.value === '' || mail.value === '' || ValidateEmail(mail) === false || namn.value === '') {
    error.style = 'display: true'
    knapp.disabled = true

  }
  else {
    knapp.disabled = false
    error.style = 'display: none'
  }
})









