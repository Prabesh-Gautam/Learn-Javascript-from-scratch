// syntax: arr.map((item)=>{
    //callback function
// })

// map() is another way to iterate through the array without using for loop 
let mArr =[1,2,3,4,5]
// map function accepts two parameter 
// a) the item of the array and the position of the element

let myArray = mArr.map((data, pos)=>{
    console.log(`the item at ${pos} is ${data}`)
    return data*2
})

console.log(myArray)


// =================== using map function in object==========

let mArr2 = [{
    name:'prabesh',
    address:'kathmandu',
    age:24
},
{
    name:'Sweta',
    address:'kathmandu',
    age:24
}
]

mArr2.map((data)=>{
    console.log(data)
})

let newArray1 = mArr2.map((data, pos)=>{
    return {
        position: pos,
        name: data.name,
        address: data.address
    }
})

console.log(newArray1)