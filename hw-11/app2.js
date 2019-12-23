class Human2 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}


class Student2 extends Human2{
    constructor(name, year) {
        super(name);
        this.year = year;
    }
    getCourse() {
        console.log(`${this.name} is on his ${this.year} year!`);
    }
}

console.log("Now to student2:");
student2 = new Student2("Vitya", 3.00);
student2.sayHello();
student2.getCourse();