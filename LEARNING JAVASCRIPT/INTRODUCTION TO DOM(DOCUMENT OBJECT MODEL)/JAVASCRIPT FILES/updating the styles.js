// selecting the element 
var countdown= document.getElementById('count_down');
var header_size = document.getElementById('main_body');

// assigning the elements content/attribute to the variables.
var initialElement= countdown.innerHTML;


//using the timing method. 
var interval =setInterval(function(){
    // use of ternary operator {( condition ?) exp1:exp2} if condition is true exp1 goes else exp2 goes.
    //  can be used instead of if-else.
    initialElement = initialElement > 0 ? initialElement-1: 0;
    countdown.innerHTML = initialElement;


    // Updating the style of the html elements.
    countdown.style.fontSize = initialElement*100 +'px' 
    header_size.style.width = initialElement*10+ '%'
    header_size.style.opacity=  initialElement/10;

    //printing the new value applied to the html element in the console.
    console.log(countdown);
    console.log(header_size);

    if(initialElement<=0){
        clearInterval(interval);
    }
    
     
},1000)

// ************************************** Updating the css *************************************************************************
