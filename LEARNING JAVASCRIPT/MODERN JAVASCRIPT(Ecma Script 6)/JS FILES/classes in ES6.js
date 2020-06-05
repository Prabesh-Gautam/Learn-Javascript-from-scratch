// syntax:
// class ClassName{ //class name should start with a capital letter.
//     constructor(){
//         //initialize the property here
//     }
//     //method outside the constructor
//     method1 = ()=>{
//         //method body
//     }
// }

// it is just like costructor which helps in making objects

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getDetails = () =>{
        return `The person's name is ${this.name} and age is ${this.age}`
    }
}

var p1 = new Person("Prabesh", 24)
console.log(p1)
console.log(p1.getDetails())

var p2 = new Person('ram', 18)
console.log(p2)
console.log(p2.getDetails())