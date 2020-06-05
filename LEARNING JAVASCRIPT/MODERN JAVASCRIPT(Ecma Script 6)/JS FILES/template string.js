function getFullName(firstName, lastName){
    return `${firstName} ${lastName} `
}


let name = 'Prabesh'
let mGreeeting = `hello ${name}` //using variable in template strings
console.log(mGreeeting.toUpperCase())



let mGreeeting1 = `hello ${getFullName('prabesh', 'gautam')}` //using function in template strings
console.log(mGreeeting1.toUpperCase())


// creating something complex 
// rgba(red, green, blue, alpha)

let red = 200;
let green = 150;
let blue = 255;
let alpha = 0.8;

const rgbaValue = 'rgb('+ red +','+ green +','+ blue + ','+ alpha+')' //normally creating
console.log(rgbaValue)
//using template strings

const rgbaValue1  = `rgba(${red},${green},${blue},${alpha})`
console.log(rgbaValue1)
