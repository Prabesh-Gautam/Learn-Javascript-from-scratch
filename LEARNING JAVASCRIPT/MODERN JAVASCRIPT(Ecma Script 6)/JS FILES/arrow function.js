// normally making a function
function greetings(name){
    return `welcome ${name}`
}
console.log(greetings('prabesh'))

// creating function using arrow function
// always make the function constant as it cannot be changed later in the code.
const mgreetings = (name) => {
    return `welcome ${name}`
}
console.log(mgreetings('ram'))

// we can write function in other ways also if only single parameter.
const m1greetings = name => {
    return `welcome ${name}`
}
console.log(m1greetings('prabesh'))

// if only one line return function we can write this as well
const m2greetings = (name,age) =>`welcome ${name},${age}`
console.log(m2greetings('hari',18))

