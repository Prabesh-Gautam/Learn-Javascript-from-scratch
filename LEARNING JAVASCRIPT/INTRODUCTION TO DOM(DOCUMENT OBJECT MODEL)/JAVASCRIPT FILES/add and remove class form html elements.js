
var mainheading = document.getElementById('demo');

//adding another class to the class list
mainheading.classList.add("alternate_class");    

//removing the class from the class list
mainheading.classList.remove('class_name');


setTimeout(function(){
    
mainheading.classList.remove("alternate_class");



},1000)
console.log(mainheading.classList);
