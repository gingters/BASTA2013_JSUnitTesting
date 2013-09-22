var Model;

(function (Model) {
    var Person = (function () {
        function Person(name, lastName, yearOfBirth) {
            this.name = name;
            this.lastName = lastName;
            this.age = 2013 - yearOfBirth;
        }
        Person.prototype.introduce = function () {
            return "My name is " + this.lastName + ", " + this.name + " " + this.lastName + ".";
        };
        Person.prototype.tellAge = function () {
            return "I am " + this.age + " years old.";
        };
        return Person;
    })();
    Model.Person = Person;    
})(Model || (Model = {}));
//@ sourceMappingURL=Model.js.map
