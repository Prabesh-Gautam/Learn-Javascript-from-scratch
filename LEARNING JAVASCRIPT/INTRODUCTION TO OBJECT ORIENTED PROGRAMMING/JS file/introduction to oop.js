// Object oriented programming it is not any progremming language or any library it is just the way of writing the code in a propper manner

// writing code without using oop 
var firstName = 'Prabesh'
var lastName = "Gautam"
var dateOfBirth = '2052-12-15'
var address = "Kathmandu"

function getFirstName(){
    return firstName;
}
function getLastName(){
    return firstName;
}
function getDateOfBirth(){
    return firstName;
}
function getAddress(){
    return firstName;
}

// Writing the code in OOP style making an object Person

var Person = {
    firstName:"prabesh",
    lastName:"gautam",
    dateOfBirth:'2052-12-15',
    address:'Kathmandu',

    getFirstName: function(){
        return this.firstName
    },
    getLastName: function(){
        return this.firstName
    },
    getDateOfBirth: function(){
        return this.firstName
    },
    getAddress: function(){
        return this.firstName
    },

}

console.log(Person.getFirstName())
console.log(Person.firstName)

