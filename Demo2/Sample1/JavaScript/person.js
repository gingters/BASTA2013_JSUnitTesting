// Person.js - Defines a person object for a client side model to unit test

Person = function(name, lastName, age) {
	var _name = name;
	var _lastName = lastName;
	var _age = age;

	return {
		getName: function() {
			return 't'+ _name;
		},

		getLastName: function() {
			return _lastName;
		},

		getAge: function() {
			return _age;
		},

		_nop: {}
	};
};
