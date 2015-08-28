'use strict';

var Person = require('../src/person');
var Student = require('../src/student');
var Teacher = require('../src/teacher');

describe('Teacher', function() {
    it('should have name, age, class', function() {
        var teacher = new Teacher('Tom', 21, 2);
        expect(teacher.name).toBe('Tom');
        expect(teacher.age).toBe(21);
    });

    it('Teacher should instanceof Person', function() {
        var teacher = new Teacher('Tom', 21, 2);
        expect(teacher instanceof Person).toBe(true);
    });

    describe('#introduce', function() {
        it('when teacher do not have class, should return My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.', function() {
            var teacher = new Teacher('Tom', 21, '');
            expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.');
        });

        it('when teacher has class, should return My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.', function() {
            var teacher = new Teacher('Tom', 21, 2);
            expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.');
        });
    });

    describe('#introduceWith', function() {
        it('if this teacher teach Jerry return My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.', function() {
            var student = new Student('Jerry', 21, 2);
            var teacher = new Teacher('Tom', 21, 2);
            expect(teacher.introduceWith(student)).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.');
        });

        it("if this teacher do not teach Jerry return My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.", function() {
            var student = new Student('Jerry', 21, 3);
            var teacher = new Teacher('Tom', 21, 2);
            expect(teacher.introduceWith(student)).toBe("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");
        });
    });
});
