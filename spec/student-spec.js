var Student = require('../src/student');

describe('Student', function() {
    it('should have name, age, class', function() {
        var student = new Student('Tom', 21, 2);
        expect(student.name).toBe('Tom');
        expect(student.age).toBe(21);
        expect(student.class).toBe(2);
    });
    describe('#introduce', function() {
        it('should return I am a Student. I am at Class 2', function() {
            var student = new Student('Tom', 21, 2);
            expect(student.introduce()).toBe('I am a Student. I am at Class 2');
        });
    });
});
