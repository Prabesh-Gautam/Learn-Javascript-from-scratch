var inputField = document.getElementById('input_field');
var addListItem = document.getElementById('add');
var updateFirstItem = document.getElementById('update');
var removeFirstItem = document.getElementById('delet');
var listing = document.getElementById('listing');




var data;
inputField.oninput = function(event){
    var a = event.target.value;
    data = a;
    console.log(data);
}


function addList(){
    var newElement = document.createElement('li');
    var newTextNode = document.createTextNode(data);
    newElement.append(newTextNode);
    var newElement1 = document.createElement('button')
    var newElement2 =document.createElement('i')
    newElement2.classList = "fas fa-trash-alt";
    newElement1.append(newElement2)
    newElement.append(newElement1);
    return newElement

}

var deleting;


addListItem.addEventListener('click',function() {
    var value = addList();
    listing.append(value);
    console.log(listing)
    var deletbutton = document.querySelector('#listing>li>button')
    deleting = deletbutton;
    console.log(deletbutton);

} )


updateFirstItem.addEventListener('click', function(){
    var firstElement = listing.firstElementChild;
    if(listing.childElementCount === 0 || data === firstElement.innerHTML ){
        alert("No firstlist or similar value")
    }
    else{    
        firstElement.innerHTML = data;
    }



})

removeFirstItem.addEventListener('click', function(){
    var firstElement = listing.firstElementChild;
    listing.removeChild(firstElement);


})




