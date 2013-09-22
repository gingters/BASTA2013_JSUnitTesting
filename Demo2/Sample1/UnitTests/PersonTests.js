
describe('Person', function() {

	 describe('constructor', function() {

		it('should create an instance', function() {
			var person = new Person();

			expect(person).not.toBe(null);
		});

		it('should correctly initialize the instance', function() {
			var person = new Person('name', 'lastname', 15);

			expect(person.getName()).toBe('name');
			expect(person.getLastName()).toBe('lastname');
			expect(person.getName()).toBe('name');
		});
	});
});



