//using the windows object to access the specific element
var a = window.document.getElementById('input_div')
console.log(a)

//using the innerWidth property of windows object to find the width of the webpage
let b = window.innerWidth
console.log(b)

//using the innerheight property of windows object to find the height of the webpage
let c = window.innerHeight
console.log(c)

//mentioning window object is optional , the property falls automatic to the window object.
window.alert('hey, this is an alert')

window.confirm('are you sure ??')

window.prompt('enter a number')

// window.open('https://google.com')//popup a new page 

// window.close()//close the current windows