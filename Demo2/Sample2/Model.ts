module Model {

	export class Person {

		private name: string;
		private lastName: string;
		private age: number;

		constructor(name: string, lastName: string, yearOfBirth: number) {
			this.name = name;
			this.lastName = lastName;
			this.age = 2013 - yearOfBirth;
		}

		introduce(): string {
			return "My name is " + this.lastName + ", " + this.name + " " + this.lastName + ".";
		}

		tellAge(): string {
			return "I am " + this.age + " years old.";
		}
	}
}