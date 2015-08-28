'use strict';

var Person = require('./person');

function Student(name, age, klass) {
    Person.call(this, name, age);
    this.class = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Person.prototype.introduce;
Student.prototype.introduce = function() {

    var str = '';
    str += this.super_introduce();
    str += ' I am a Student. I am at Class ' + this.class + '.';
    return str;
}

module.exports = Student;
