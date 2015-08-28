'use strict';

var Person = require('../src/person');
var Worker = require('../src/worker');

describe('Worker', function() {
    it('should have name, age', function() {
        var worker = new Worker('Tom', 21);
        expect(worker.name).toBe('Tom');
        expect(worker.age).toBe(21);
    });
    it('Worker should instanceof Person', function() {
        var worker = new Worker('Tom', 21);
        expect(worker instanceof Person).toBe(true);
    });
    describe('#introduce', function() {
        it('should return I am a Worker. I have a job.', function() {
            var worker = new Worker('Tom', 21);
            expect(worker.introduce()).toBe('My name is Tom. I am 21 years old. I am a Worker. I have a job.');
        });
    });
});
