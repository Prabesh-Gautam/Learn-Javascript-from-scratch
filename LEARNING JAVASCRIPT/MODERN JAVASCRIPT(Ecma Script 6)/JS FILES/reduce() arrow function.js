// syntax: 
// arr.reduce((acc, item)=>{
    // callback function body
// }, acc default_value)

//it is also like a map function which iterates over an array 
// the difference is that it accepta a parameter named as accumulator which takes the result of the previous iteration.

let myArray = [ 10,20]

let newArray = myArray.reduce((acc, item)=>{
    return  acc + item
},0)

console.log(newArray)