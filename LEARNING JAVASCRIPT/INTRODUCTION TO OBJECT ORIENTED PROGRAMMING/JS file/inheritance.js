function Person(pName, pdob, pAddress,pReflection){
    this.Name = pName;
    this.dob = pdob;
    this.Address = pAddress;
    this.Reflection = pReflection;

}
Person.prototype.calculateAge = function(){
    return("Age of "+this.Name +" is " +(2020 - this.dob))
}
Person.prototype.lastName = 'Gautam'

Person.prototype.updateDateOfBirth = function(date){
    this.dob = date;
} // this is the used to set the value of the object. Getter and Setter are used to get the value and set the value.

var person1 = new Person('Prabesh',1996,'Kathmadu','fair')
var person2 = new Person('Prashant',2002,'Ilam','fair')


console.log(person1)
console.log(person1.calculateAge())
console.log(person1.lastName)
person1.updateDateOfBirth(1998)
console.log(person1.calculateAge())


console.log(person2)
console.log(person2.calculateAge())
console.log(person2.lastName)
person2.updateDateOfBirth(2004)
console.log(person2.calculateAge())

