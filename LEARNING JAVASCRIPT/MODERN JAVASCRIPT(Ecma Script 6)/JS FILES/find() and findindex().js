// find() methode is used to search for an element in the array that matches the condition and returns the first match value
// findIndex() is similar to the find() only difference is that i return the index of the element
// this also returns a true or false value to select the element inside an array
let myArray = [1,3,5,2,9,6]

let newArray =myArray.find(item => item % 2 === 0 )

console.log(newArray)

let newArray1 =myArray.findIndex(item => item % 2 === 0 )

console.log(newArray1)
