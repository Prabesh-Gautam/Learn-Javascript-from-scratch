// making an object car
var Name = "Ram"
var Person = {
    Name: "Prabesh Gautam",
    Address:"Kathmandu",
    contact: "9840072453",
    getName:function(){
        return this.Name //remove this keyword and console will print ram as the name as it acquire the value of global variable.
    },
    parent: {
        Name:"Pramod Gautam",
        Address:"Ilam",
        contact:'9862740090',
        getName: function(){
            return this.Name // it returns the name of the parent object as it is associated to the parent object in here firstly.
        }
    }
    
}

console.log(Person.getName())
console.log(Person.parent.getName())