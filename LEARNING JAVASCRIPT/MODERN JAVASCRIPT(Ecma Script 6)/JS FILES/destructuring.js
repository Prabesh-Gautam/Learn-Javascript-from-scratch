
let name = 'Prabesh Gautam'
let mArr = name.split(' ');
console.log(mArr)

//assigning the firstName and lastName into two variable.
// this one works fine but there is a better way of doing so
let firstName = mArr[0]
let lastName = mArr[1]

console.log(firstName)
console.log(lastName)

// using the destructuring format
// here the sequence matters 
let [first_name, last_name] = mArr

console.log(first_name)
console.log(last_name)



// we can do all the above action for objects too
// In objects the variable name must be same as the key names.
// here the sequence doesn't matters.
const person = {
    first_name1:'Prabesh',
    last_name2 :'Gautam', 
}

let {first_name1, last_name2} = person

console.log(first_name1)
console.log(last_name2)

// creating the object using the mapped variable.
// if wantes the same key name as the variable name 

let name1 = 'Prabesh'
let name2 = 'gautam'
let age1 = 24

let mObj1 = {
    name1,
    name2,
    age1
}

console.log(mObj1)