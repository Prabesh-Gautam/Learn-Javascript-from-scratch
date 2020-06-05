
// get method fetching data from the web
fetch('https://jsonplaceholder.typicode.com/users/')
.then( res=> { //it returns promise with response which needs to be converted to the json format to access it 
if(res.ok){ 
    return res.json() //the response should be converted to the json file.
    console.log("success")
}
else{
    console.log("not success")
}
})
.then(data => console.table(data))//you can either perform some action back there. 


// post method updating some data to the web and fetching the updated value.

fetch("https://jsonplaceholder.typicode.com/users/", {
   
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:'Prabesh'        
    })
})
.then(res=>{
    return res.json()
})
.then(data =>console.log(data))


