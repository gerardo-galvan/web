

class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
	
	get name() {
		return this._name;
	}
	
	set name(newName) {
		
		if(newName) {
		this._name = newName;
		}
	}
}


// person is the super class for employee
// employee inherits from person 

class Employee extends Person{
	doWork() {
		return `${this._name} is working`;
	}
}




let y = new Employee("see");
console.log(y);