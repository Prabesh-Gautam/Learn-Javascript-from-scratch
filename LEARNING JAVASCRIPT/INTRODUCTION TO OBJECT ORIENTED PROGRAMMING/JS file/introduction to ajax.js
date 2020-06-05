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


addListItem.addEventListener('click', createTodoItemAtBackend)
// {
//     var value = addList();
//     listing.append(value);
//     console.log(listing)
//     var deletbutton = document.querySelector('#listing>li>button')
//     deleting = deletbutton;
//     console.log(deletbutton);

// }
 


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




// +++++++++++++++++++++++++++++ AJAX PART (Asynchronous) ++++++++++++++++++++++++++++++++++++++++++++++
function createTodo(id, title){
        var newElement = document.createElement('li');
        var newTextNode = document.createTextNode(title);
        newElement.append(newTextNode);
        newElement.id = id;
        return newElement
}
function getTodoListFromBackEnd(){
    // sending request to the backend 
    var http = new XMLHttpRequest(); //creating the instance of the httprequest object {setting the http request}
    // handling the response
    http.onreadystatechange = function(){
        if(this.readyState === 4 ){ //verifying request has finished and response is ready. { handling the response}
            if(this.status === 200){ // verifying the response has been received. { handling the response}
                var jsonResponse = JSON.parse(this.responseText)
                for(i=0; i<=this.response.length;i++){
                    listing.append(createTodo(jsonResponse[i].id , jsonResponse[i].title))
                    

                }
                    // console.log(data.title)
                }
            else{
                console.log("call failed")
            }
        }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos', true); 
    http.send();

}

// making http post request 

function createTodoItemAtBackend(){
    var http = new XMLHttpRequest()
    http.open('POST','https://jsonplaceholder.typicode.com/todos', true); 
    var myobj = {
            "userId": 1,
            "title": data,
            "completed": false 
    }
    var datainfo = JSON.stringify(myobj)
    http.send(datainfo)

    http.onreadystatechange = function(){
        if(this.readyState === 4 ){ //verifying request has finished and response is ready. { handling the response}
            if(this.status === 201){ // verifying the response has been received. { handling the response}
            var response1 =  JSON.parse(this.responseText) 
            listing.appendChild(createTodo(response1.id , data))
        }
        else{
            console.log('something went wrong')
        }
    }

}
}

getTodoListFromBackEnd();