console.log(window)
//using the screen object 
//available height/width = total  screen h/w - interface used h/w 

// we can easily find the actual height and width of the any device screen.
console.log(screen.availHeight)
console.log(screen.availWidth)

//using the navigator object

console.log(navigator)
console.log(navigator.userAgent) // checking the current browser and current windows. parse userAgent api can be used to retrive the information
console.log(navigator.onLine) // checking whether internet is on or not in client side.