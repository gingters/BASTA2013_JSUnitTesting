
describe('Person', function() {

	var name = "Name";

	describe('constructor', function() {

		it('should create an instance', function() {
			var person = new Person();

			expect(true).toBeTruthy();

			expect(person).not.toBe(null);
		});

		it('should correctly initialize the instance', function() {
			var person = new Person(name, 'lastname', 15);

			expect(person.getName()).toBe(name);
			expect(person.getLastName()).toBe('lastname');
			expect(person.getAge()).toBe(15);
		});
	});
});



