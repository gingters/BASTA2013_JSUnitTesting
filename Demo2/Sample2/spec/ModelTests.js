describe('Module Model', function() {


	describe('class Person', function(){


		describe('method introduce', function() {

			var pers = new Model.Person('James', 'Bond', 1920);

			it('should introduce properly', function(){
				expect(pers.introduce()).toBe('My name is Bond, James Bond.');
			});

			it('should know the age', function(){
				expect(pers.tellAge()).toBe('I am 93 years old.');
			});



		});

	});
});