

// const add = (num1, num2)=> num1+num2;
 // rest operator ...

const show = (...args)=> console.log(args);
show(2,10,6,7,8)

//rest operator always should be in the end . if kept in the beginning then it cause error.

const add = (num1,num2, ...args)=> { 
    console.log(num1)
    console.log(num2)
    console.log(args)
    let sum = num1 + num2
    for(i=0;i<args.length;i++){
        sum += args[i]
    }
    console.log(sum)
}

add(4,5,6,7,8,9,10,10)

