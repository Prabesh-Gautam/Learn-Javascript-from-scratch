var newListelement =document.createElement('li'); //creating a new element using createElement and storing it in a variable.
var listing = document.getElementById('to_do');
var firstItem = document.getElementById('item1');
var button = document.getElementById('btn1');
var text = document.getElementById('txt1')
var addList = document.getElementById('add_list')

// var newTextNode = document.createTextNode('list3'); //creating a text node

// newListelement.append(newTextNode); // adding the text node to the element node.
// //newListelement.append(document.createTextNode("value")); // we can either pass directly.

// console.log(newListelement)

var info;
text.onchange = function(event){
    var data = event.target.value;
    info = data;    
    console.log(data)
}

addList.addEventListener('submit', function(event){
        event.preventDefault();
        var newListElement =document.createElement('li')
        var newTextNode = document.createTextNode(info);
        newListElement.append(newTextNode);
        listing.append(newListElement);
        console.log(newListElement)
    })








// adding the new list on every button click
// var button = document.getElementById('btn1')

// var count = listing.childElementCount; //it counts the number of child element
// button.addEventListener('click', function(){
//     count +=1;
//     var newListelement =document.createElement('li')
//     var newTextNode = document.createTextNode('list' + count);//we can directly pass here too without a counter
//     newListelement.append(newTextNode);
//     listing.append(newListelement);
//     console.log(newListelement)

// })


//adding the item in an specific position
// var count = listing.childElementCount -  ; //it counts the number of child element
// button.addEventListener('click', function(){
//     var newListelement =document.createElement('li')

//     var newTextNode = document.createTextNode('list' + count); 
//     newListelement.append(newTextNode);
//     listing.insertBefore(newListelement, firstItem);
//     console.log(newListelement)

// })
