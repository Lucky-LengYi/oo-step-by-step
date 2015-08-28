'use strict';

var Person = require('./person');

function Teacher(name, age, klass) {
    Person.call(this,name,age);
    this.class = klass || '';
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Person.prototype.introduce;
Teacher.prototype.introduce = function () {
    var str = '';
    str += this.super_introduce() + ' I am a Teacher. I teach';
    str += this.class!==''? ' Class ' + this.class + '.' : ' No Class.';
    return str;
}

Teacher.prototype.introduceWith = function (student) {
    if (student.class === this.class) {
        return this.super_introduce() + ' I am a Teacher. I teach '+ student.name +'.';
    }else {
        return this.super_introduce() + " I am a Teacher. I don't teach " + student.name +'.';
    }
}

module.exports = Teacher;
