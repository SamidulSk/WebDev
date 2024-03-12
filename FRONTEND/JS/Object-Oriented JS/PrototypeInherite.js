function Person(name) { 
    this.name = name;  // instance member
}

Person.prototype.greet = function () {    // prototype member
    console.log(`Hello, my name is ${this.name}`);
}

function Employee(name,employeeID){
    this.name=name
    this.employeeID=employeeID
}
Employee.prototype.showEmpDetails= function(){
    console.log(`Hello, EmpID ${this.employeeID}`);
}

Employee.prototype=Object.create(Person.prototype)
Employee.prototype.constructor=Employee

let pw= new Employee("SK","hc124")
pw.greet()   // employee can access greet method => inheritance