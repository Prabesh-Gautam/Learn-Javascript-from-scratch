// extends keyword is used to inheritant the super class
// super() function is used to call the constructor function of the super class


class Person{
    constructor(name, birthDate){
        this.name = name
        this.birthDate= birthDate
    }
    getAge = ()=>{
        console.log(2020-this.birthDate)
    }
}

class Teacher extends Person{
    constructor(name, birthyear,exp, salary, type){
        super(name, birthyear)
        this.experience = exp
        this.salary = salary
        this.type = type
    }
    getOfficeHours =()=>{
        if(this.type =="full"){
            console.log(`${this.name} is a full time teacher`)
        }
        else if(this.type =="part"){
           console.log( `${this.name} is a part time teacher`)
        }
        else{
            console.log('Invalid type ')
        }
    }
}

let p2 = new Teacher("Prabesh",1996,'20 years', 15000, "full")
console.log(p2)
p2.getAge()
p2.getOfficeHours()

let p3 = new Teacher("hari",2000,'27 years', 25000, "part")
console.log(p3)
p3.getAge()
p3.getOfficeHours()

let p4 = new Teacher("Sweta",1996,'30 years', 35000, 'full')
console.log(p4)
p4.getAge()
p4.getOfficeHours()
