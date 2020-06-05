console.log("script running")
//getting the element style value of inline styling
var fontincrease = document.getElementById('btn2');

console.log(fontincrease.style.fontSize);

//getting the element style value of external css file styling
// this obtains the computed value, the computed value cannot be modiefied, as it is read only.
// for modifying styles we must use the inline property.

var fontdescrease = document.getElementById('btn1');

console.log(fontdescrease.style.backgroundColor)//this will not access the styling value here.

console.log(window.getComputedStyle(fontdescrease).backgroundColor);

// increasing  and descreasing the font on butto clicked.

var headingfont = document.getElementById('heading1');
var initialfont = window.getComputedStyle(headingfont).fontSize;

//for the pointer effect while hover
fontincrease.onmouseover = function(){
    fontincrease.style.cursor = "pointer";
}
fontdescrease.onmouseover = function(){
    fontdescrease.style.cursor = "pointer";
}
console.log(initialfont);

// changing the value on clicking the button
fontincrease.onclick = function(){

    initialfont = initialfont.substr(0,(initialfont.length-2))
    initialfont = parseInt(initialfont) + 20 ;
    headingfont.style.fontSize= initialfont+'px';
    initialfont= headingfont.style.fontSize;
    console.log(window.getComputedStyle(headingfont).fontSize);
}

fontdescrease.addEventListener('click',function(){
    initialfont = initialfont.substr(0,(initialfont.length-2))
    initialfont = parseInt(initialfont) - 20 ;
    headingfont.style.fontSize= initialfont+'px';
    initialfont= headingfont.style.fontSize;
    console.log(window.getComputedStyle(headingfont).fontSize);


})
