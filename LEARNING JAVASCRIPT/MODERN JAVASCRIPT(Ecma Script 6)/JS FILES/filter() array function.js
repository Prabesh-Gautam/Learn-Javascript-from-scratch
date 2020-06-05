//syntax:
// arr.filter((item)=>{
//     return true/false to add/skip the current item
// })


// it is used to create a new array from the previous array with certain filters.

let myArray = [{
    name:'prabesh',
    age:24,
    address:'kathmandu'
},
{
    name:'ram',
    age:10,
    address:'kathmandu'
},
{
    name:'hari',
    age:18,
    address:'ithari'
},
{
    name:'shyam',
    age:30,
    address:'kathmandu'
},
{
    name:'shyam',
    age:5,
    address:'banepa'
},]

let newArray = myArray.filter((item)=>{
        return item.age>15 && item.address == 'kathmandu'
})

console.log(newArray)