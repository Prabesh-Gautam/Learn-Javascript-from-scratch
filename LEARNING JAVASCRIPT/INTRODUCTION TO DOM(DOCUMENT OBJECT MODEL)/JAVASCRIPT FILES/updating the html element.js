console.log('script loaded');
// selecting the element 
var countdown= document.getElementById('count_down');
var source_url = document.getElementById('bg-img');

// assigning the elements content/attribute to the variables.
var initialElement= countdown.innerHTML;
var final_source = source_url.src;
console.log(source_url.src);


//using the timing method. 
setInterval(function(){
    // use of ternary operator {( condition ?) exp1:exp2} if condition is true exp1 goes else exp2 goes.
    //  can be used instead of if-else.
    initialElement = initialElement > 0 ? initialElement-1: 0;
    countdown.innerHTML = initialElement;

    final_source = initialElement % 2 ===0 ? "./ASSETS/image1.jpg":"./ASSETS/image2.jpg";
    source_url.src = final_source;
     
},1000)

