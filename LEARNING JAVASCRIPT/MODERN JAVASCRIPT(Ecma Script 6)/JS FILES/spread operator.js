// SPREAD operator in arrays
let mArr1 = [1,2,3,4,5]
let mArr2 = [54,65,78,90]

let mArr3 = [...mArr1]; //using spread operator
mArr1.push(10) // this shows that the spreas operator creates a new array so the value of mArr3 doesn't gets changed.
console.log(mArr1)
console.log(mArr3)

//concatinating two arrays using spread operators.
let mArr4 = [...mArr1 , ...mArr2]
let mArr5 = [20,40,...mArr1 , ...mArr2,70,50]

console.log(mArr4)
console.log(mArr5)


// ===============================SPREAD OPERATOR IN OBJECTS===================================

let mObj1 = {
    'name': 'prabesh',
    'lastName': 'Gautam'
}
let mObj2 = {
    'age':24
}

let mObj3 = {...mObj1 , ...mObj2}
console.log(mObj3)
 // we can perform all the above things in the object also.