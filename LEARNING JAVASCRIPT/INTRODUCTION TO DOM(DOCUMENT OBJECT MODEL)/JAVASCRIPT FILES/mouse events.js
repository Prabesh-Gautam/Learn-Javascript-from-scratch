var button = document.getElementById('btn1');
var mouseover = document.getElementById('mouseover')
var mouseenter = document.getElementById('mouseenter')
var mousemove = document.getElementById('mousemove')

button.onmousedown = function(){
 console.log('mousedown event triggered');
}

button.onmouseup = function(){
    console.log('mouseup event triggered');
   }

 button.onclick = function(){
    console.log('mouse click event triggered');
   }

   button.ondblclick = function(){
    console.log('mouse double click event triggered');
   }
 

 var countover =0;

mouseover.addEventListener('mouseover', function(){
    var count = document.querySelector('#mouseover > p')
    countover += 1;
    count.innerHTML = countover;
    
 
})
 var countenter = 0;
mouseenter.addEventListener('mouseenter', function(){
    var count = document.querySelector('#mouseenter > p')
    countenter +=1;
    count.innerHTML = countenter;
})

var countmove = 0;
mousemove.addEventListener('mousemove', function(){
    var count = document.querySelector('#mousemove > p')
    countmove +=1;
    count.innerHTML = countmove;
})
