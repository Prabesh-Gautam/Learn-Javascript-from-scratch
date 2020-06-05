$(document).ready(function(){

$.get(`https://jsonplaceholder.typicode.com/users`, (response)=>{
     
    console.log(response)

        let id = 1
        $.get(`https://jsonplaceholder.typicode.com/users/${id}`, response =>{
            console.log(response)

                    $.get(`https://jsonplaceholder.typicode.com/users/${id}/emails`, response =>{
                        console.log(response)
                    }).fail(err => console.log(err))
        }).fail(err => console.log(err))
    }).fail(err => console.log(err))






})



