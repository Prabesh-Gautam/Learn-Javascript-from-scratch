var userName = document.getElementById('username');
var password = document.getElementById('password');
var button = document.getElementById('btn1');
var loginForm = document.getElementById('login-form');

console.log("script running");

// event name 'Change'

// userName.addEventListener('change', function(){
//     console.log('Value changed');
// })

// userName.addEventListener('input', function(){
//     console.log('value changed');
// })

// userName.addEventListener('input', function(event){
//     console.log(event.target);
// })

userName.addEventListener('input', function(event){
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase()
    console.log(currentValue);
    userName.value = currentValue;
})

// event name 'focus'

password.onfocus = function(){
    console.log('field focused');
    password.style.backgroundColor = 'lightgreen';
}

//event name 'blur'
password.onblur = function(){
    console.log('field not focused');
    password.style.backgroundColor = 'white';
}


//event name 'submit'

// loginForm.onsubmit = function(){

//     alert('submit button clicked');
// }

//removing the default behavior refresh page of submit form using preventDefault()

loginForm.onsubmit = function(event){

    alert('submit button clicked');
    event.preventDefault();
}

