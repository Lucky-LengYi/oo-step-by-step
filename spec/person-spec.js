var Person = require('../src/person');

describe('Person', function() {
    describe('#name', function() {
        it('should return Tom', function() {
            var person = new Person('Tom',21);
            expect(person.name).toBe('Tom');
        });
    });
    describe('#age', function() {
        it('should return 21', function() {
            var person = new Person('Tom',21);
            expect(person.age).toBe(21);
        });
    });
    describe('#introduce', function() {
        it('should return My name is Tom. I am 21 years old.', function() {
            var person = new Person('Tom',21);
            expect(person.introduce()).toBe('My name is Tom. I am 21 years old.');
        });
    });
});
