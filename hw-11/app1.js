let Human = function (name) {
    this.name = name;
};

Human.prototype.sayHello = function () {
    console.log(`Hello, ${this.name}!`);
};

let Student = function (name, year) {
    this.name = name;
    this.year = year;
};

Student.prototype = Object.create(Human.prototype);

Student.prototype.getCourse = function () {
    console.log(`${this.name} is on his ${this.year} year!`);
};

console.log("student1:");
student1 = new Student("Vasya", 2.00);
student1.sayHello();
student1.getCourse();