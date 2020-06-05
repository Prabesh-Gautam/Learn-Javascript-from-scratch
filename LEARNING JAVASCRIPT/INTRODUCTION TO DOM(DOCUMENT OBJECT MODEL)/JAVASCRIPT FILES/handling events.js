
console.log("script running");

var button1 = document.getElementById('btn1');
var mainBody = document.getElementById('main_body');

button1.style.cursor = 'pointer';

console.log(button1);

// Method 1: using Events Property
// syntax:
// selectedElements.EventProperty = function(){

// }

// button1.onclick= function(){
//     mainBody.style.backgroundColor = "yellow";
//     console.log(mainBody.style.backgroundColor);
// }

// Method 2: using addEventListner()
// syntax
// selectedElements.addEventListner({'EventName'}, function(){})

// using annynomous function.
button1.addEventListener('click', function(){
    mainBody.style.backgroundColor = "crimson";
    console.log(mainBody.style);
})

// using a reference function. In this type while calling the function 
// you just need to write the name of the function without the paranthesis.
function overBtn(){
    mainBody.style.backgroundColor='green'
    console.log(mainBody.style);
}

button1.onmouseover = overBtn; // must be without paranthesis


//using annynomous function
button1.onmouseleave = function(){

    //using math.random() to create random rgb values for the background.
    // var randomnumber = Math.floor( Math.random() *255);
    mainBody.style.backgroundColor= "rgb("+ Math.floor( Math.random() *255) +','+ Math.floor( Math.random() *255) +',' + Math.floor( Math.random() *255) +")"
    console.log(mainBody.style);
}