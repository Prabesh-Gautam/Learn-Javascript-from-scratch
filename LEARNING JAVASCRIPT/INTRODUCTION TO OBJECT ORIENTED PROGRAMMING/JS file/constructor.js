// Constructor helps in creating as many object as we want , and the object created are called instances. It acts as a blue print for creating 
// other objects.

function Person(pName, pAddress, pContact){ //its a practice that the name of constructor should start with a capital letter
    this.Name = pName;
    this.Address = pAddress;
    this.Contact = pContact;
}

var person1 = new Person('Ram', 'Kathmandu', '986788453')
var person2 = new Person('Prabesh',"Ilam","9840072453")
console.log(person1)
console.log(person2)