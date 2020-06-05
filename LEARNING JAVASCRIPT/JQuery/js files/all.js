//using the ready function the script only starts when the dom is ready . It is a good practice
$(document).ready(function () { 
    console.log("DOM ready")
//====================using the filter function on listing class and effect toggle which hides and shows the element.
    $('#btn1').click(function(){
        $(".listing").first().toggle('slow') 
        $('button[id = "btn2"]').toggle('slow')
    })

    


// ========================getting and setting the html elements value=================
console.log($('#main-listing1').html()) // getting the html value of the element
// console.log($('#main_body').html())


// =========================setting the html value of the selected element=============
var listitem1 = "<li>Foods</li>"
var listitem2 = "<li>Guitar</li>"
var listitem3 = "<li>Reading facts</li>"

$('#btn2').click(function () {
    $('#main-listing2').append(listitem1) // adding the child element using append function
    $('#main-listing2').append(listitem2, listitem3)  //using multiple  value in append function
 
  })

$('#btn3').click(function(){
    $('#main-listing2>li:first').remove() //removes the first child element of the list.
    
})



//========================== adding and updating styles and class in html elements================

console.log($('#section1').css('font-weight')) //getting the css property value.

$('#main-listing1>li').css({ // setting the css value 
    'color':'red',
    'background-color':'black'
})

// $('#list>li').addClass('UpdatedClass') //adding class to the html elements

// $('#list>li').removeClass('UpdatedClass') //removing class form the html elements.

// $('#list>li').toggleClass('UpdatedClass') // keeps on toggling between classes



// ==================== Handling html Events in jquery=========================
// syntax: $('selector').event_name(function(){
    //bunch of codes.
// })

//using multiple events for an html elements.
$('#btn4').on({
'click': function(){
    $(this).css('background-color','red')
},
'dblclick':function(){
    $(this).css('background-color','green')
},
'mouseenter': function(){
    $(this).css('background','yellow')
}
})
// making the function which return the value
function keyvalues(info) {
    var data = info.keyCode
    return data
}


$(document).on({
    'keydown':function (ev) {
        console.log(keyvalues(ev))
      },
    'keyup': function(ev){
        
        console.log(keyvalues(ev))
    }
})


//======================== MAKING AJAX CALL USING JQUERY===================
// get method
$.get('https://jsonplaceholder.typicode.com/users', function(data, status){
    var response = data;
    console.log("you have done it right")
    for(i=0; i<=response.length;i++){
        var item = '<li>'+ response[i].name +'</li>'
        $('#main-listing2').append(item)
    }
})

//post method
// $.post('https://jsonplaceholder.typicode.com/users',obj, function(data, status))



});


