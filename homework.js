//1

// class Rectangle {
//     #leftside;
//     #rightside;
//     #width;

//     constructor(left, right, width) {
//         this.#leftside = left;
//         this.#rightside = right;
//         this.#width = width;
//     }

//     getLeftSide() {
//         return this.#leftside;
//     }

//     getRightSide() {
//         return this.#rightside;
//     }

//     getWidth() {
//         return this.#width;
//     }

//     setSides(a, b, c) {
//         this.#width = a + b + c;
//         this.#leftside = a;
//         this.#rightside = b;
//     }
// }

// const r1 = new Rectangle(1, 2, 3);

// r1.setSides(4, 5, 6);

// console.log(r1.getWidth());

//2
// class Employee {
//     #id;
//     #firstName;
//     #lastName;
//     #salary;

//     constructor(id, firstName, lastName, salary) {
//         this.#id = id;
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#salary = salary;
//     }

//     getId() {
//         return this.#id;
//     }

//     getFirstName() {
//         return this.#firstName;
//     }

//     getLastName() {
//         return this.#lastName;
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     setId(id) {
//         this.#id = id;
//     }

//     setFirstName(firstName) {
//         this.#firstName = firstName;
//     }

//     setLastName(lastName) {
//         this.#lastName = lastName;
//     }

//     setSalary(salary) {
//         this.#salary = salary;
//     }

//     getFullName() {
//         return `${this.#firstName} ${this.#lastName}`;
//     }

//     getAnnualSalary() {
//         return this.#salary * 12;
//     }

//     raiseSalary(percent) {
//         this.#salary *= (1 + percent / 100);
//     }
// }

// let employee1 = new Employee(9, 'Jaloliddin', 'Qulmamatov', 3000);

// Math.trunc(employee1.raiseSalary(10));
// console.log(employee1.getSalary());   


//3

// class CustomDate {
//     #day;
//     #month;
//     #year;

//     constructor(day, month, year) {
//         this.#day = day;
//         this.#month = month;
//         this.#year = year;
//     }

//     getDay() {
//         return this.#day;
//     }

//     getMonth() {
//         return this.#month;
//     }

//     getYear() {
//         return this.#year;
//     }

//     setDay(day) {
//         this.#day = day;
//     }

//     setMonth(month) {
//         this.#month = month;
//     }

//     setYear(year) {
//         this.#year = year;
//     }

//     getISOdate() {
//         const formattedDay = this.#day < 10 ? `0${this.#day}` : this.#day;
//         const formattedMonth = this.#month < 10 ? `0${this.#month}` : this.#month;
//         return `${formattedDay}-${formattedMonth}-${this.#year}`;
//     }
// }

// // Example usage:
// const customDate = new CustomDate(12, 5, 2023);

// console.log(customDate.getISOdate()); 


//4

// class Time {
//     #hour;
//     #minute;
//     #second;

//     constructor(hour, minute, second) {
//         this.#hour = hour;
//         this.#minute = minute;
//         this.#second = second;
//     }

//     getHour() {
//         return this.#hour;
//     }

//     getMinute() {
//         return this.#minute;
//     }

//     getSecond() {
//         return this.#second;
//     }

//     setHour(hour) {
//         this.#hour = hour;
//     }

//     setMinute(minute) {
//         this.#minute = minute;
//     }

//     setSecond(second) {
//         this.#second = second;
//     }

//     nextSecond() {
//         this.#second++;
//         if (this.#second === 60) {
//             this.#second = 0;
//             this.#minute++;
//             if (this.#minute === 60) {
//                 this.#minute = 0;
//                 this.#hour = (this.#hour + 1) % 24;
//             }
//         }
//     }

//     previousSecond() {
//         this.#second--;
//         if (this.#second === -1) {
//             this.#second = 59;
//             this.#minute--;
//             if (this.#minute === -1) {
//                 this.#minute = 59;
//                 this.#hour = (this.#hour - 1 + 24) % 24;
//             }
//         }
//     }
// }

// const time = new Time(6, 20, 10);

// console.log(`${time.getHour()}:${time.getMinute()}:${time.getSecond()}`); 

// time.nextSecond();
// console.log(`${time.getHour()}:${time.getMinute()}:${time.getSecond()}`);

// time.previousSecond();
// console.log(`${time.getHour()}:${time.getMinute()}:${time.getSecond()}`);

//5

// Shape - Superclass
// class Shape {
//     #color;
//     #filled;

//     constructor(color, filled) {
//         this.#color = color;
//         this.#filled = filled;
//     }

//     getColor() {
//         return this.#color;
//     }

//     setColor(color) {
//         this.#color = color;
//     }

//     isFilled() {
//         return this.#filled;
//     }

//     setFilled(filled) {
//         this.#filled = filled;
//     }
// }

// class Circle extends Shape {
//     #radius;

//     constructor(color, filled, radius) {
//         super(color, filled);
//         this.#radius = radius;
//     }

//     getRadius() {
//         return this.#radius;
//     }

//     setRadius(radius) {
//         this.#radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.#radius ** 2;
//     }

//     getPerimeter() {
//         return 2 * Math.PI * this.#radius;
//     }
// }

// // Rectangle - Subclass of Shape
// class Rectangle extends Shape {
//     #width;
//     #height;

//     constructor(color, filled, width, height) {
//         super(color, filled);
//         this.#width = width;
//         this.#height = height;
//     }

//     getWidth() {
//         return this.#width;
//     }

//     setWidth(width) {
//         this.#width = width;
//     }

//     getHeight() {
//         return this.#height;
//     }

//     setHeight(height) {
//         this.#height = height;
//     }

//     getArea() {
//         return this.#width * this.#height;
//     }

//     getPerimeter() {
//         return 2 * (this.#width + this.#height);
//     }
// }

// // Example usage:

// const circle = new Circle("Red", true, 5);
// console.log("Circle Area:", circle.getArea());
// console.log("Circle Perimeter:", circle.getPerimeter());

// const rectangle = new Rectangle("Blue", false, 4, 6);
// console.log("Rectangle Area:", rectangle.getArea());
// console.log("Rectangle Perimeter:", rectangle.getPerimeter());


//6

// class Person {
//     #name;
//     #address;

//     constructor(name, address) {
//         this.#name = name;
//         this.#address = address;
//     }

//     getName() {
//         return this.#name;
//     }

//     setName(name) {
//         this.#name = name;
//     }

//     getAddress() {
//         return this.#address;
//     }

//     setAddress(address) {
//         this.#address = address;
//     }
// }

// class Student extends Person {
//     #faculty;
//     #year;
//     #university;

//     constructor(name, address, faculty, year, university) {
//         super(name, address);
//         this.#faculty = faculty;
//         this.#year = year;
//         this.#university = university;
//     }

//     getFaculty() {
//         return this.#faculty;
//     }

//     getYear() {
//         return this.#year;
//     }

//     getUniversity() {
//         return this.#university;
//     }

//     setFaculty(faculty) {
//         this.#faculty = faculty;
//     }

//     setYear(year) {
//         this.#year = year;
//     }

//     setUniversity(university) {
//         this.#university = university;
//     }
// }

// class Employee extends Person {
//     #salary;
//     #work;

//     constructor(name, address, salary, work) {
//         super(name, address);
//         this.#salary = salary;
//         this.#work = work;
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     getWork() {
//         return this.#work;
//     }

//     setSalary(salary) {
//         this.#salary = salary;
//     }

//     setWork(work) {
//         this.#work = work;
//     }
// }

// const person = new Person("John Doe", "123 Main St");
// console.log("Person:", person.getName(), person.getAddress());

// const student = new Student("Alice Smith", "456 Oak St", "Computer Science", 2, "Example University");
// console.log("Student:", student.getName(), student.getFaculty(), student.getYear(), student.getUniversity());

// const employee = new Employee("Bob Johnson", "789 Maple St", 50000, "Software Developer");
// console.log("Employee:", employee.getName(), employee.getSalary(), employee.getWork());


//7

// class Animal {
//     #name;
//     #speed;
//     #weight;

//     constructor(name, speed, weight) {
//         this.#name = name;
//         this.#speed = speed;
//         this.#weight = weight;
//     }

//     getName() {
//         return this.#name;
//     }

//     getSpeed() {
//         return this.#speed;
//     }

//     getWeight() {
//         return this.#weight;
//     }
// }

// class Mammal extends Animal {
//     #legs;

//     constructor(name, speed, weight, legs) {
//         super(name, speed, weight);
//         this.#legs = legs;
//     }

//     getLegs() {
//         return this.#legs;
//     }

//     setLegs(legs) {
//         this.#legs = legs;
//     }
// }

// class Fish extends Animal {
//     #size;

//     constructor(name, speed, weight, size) {
//         super(name, speed, weight);
//         this.#size = size;
//     }

//     getSize() {
//         return this.#size;
//     }

//     setSize(size) {
//         this.#size = size;
//     }
// }

// class Cat extends Mammal {
//     getSound() {
//         return "Meow";
//     }
// }

// class Dog extends Mammal {
//     getSound() {
//         return "Woof";
//     }
// }

// class Whale extends Fish {
//     getSound() {
//         return "Poof";
//     }
// }
// class Shark extends Fish {
//     getSound() {
//         return "Sheef";
//     }
// }

// // Example usage:

// const cat = new Cat("Fluffy", 10, 5, 4);
// console.log(`${cat.getName()} says: ${cat.getSound()}`);

// const dog = new Dog("Buddy", 15, 10, 4);
// console.log(`${dog.getName()} says: ${dog.getSound()}`);

// const whale = new Whale("Willy", 20, 5000, 15);
// console.log(`${whale.getName()} says: ${whale.getSound()}`);

// const shark = new Shark("Jaws", 25, 800, 10);
// console.log(`${shark.getName()} says: ${shark.getSound()}`);


//8

// class CustomObject {
//     static customKeys(obj) {
//         return Object.keys(obj);
//     }

//     static customValues(obj) {
//         return Object.values(obj);
//     }

//     static customEntries(obj) {
//         return Object.entries(obj);
//     }
// }

// class CustomNumber {
//     static customIsInteger(num) {
//         return Number.isInteger(num);
//     }
// }

// class CustomArray {
//     static customIsArray(arr) {
//         return Array.isArray(arr);
//     }
// }

// const obj = { a: 1, b: 2, c: 3 };
// console.log("Object Keys:", CustomObject.customKeys(obj));
// console.log("Object Values:", CustomObject.customValues(obj));
// console.log("Object Entries:", CustomObject.customEntries(obj));

// const integerNum = 42;
// const floatNum = 3.14;
// console.log(`${integerNum} is an integer:`, CustomNumber.customIsInteger(integerNum));
// console.log(`${floatNum} is an integer:`, CustomNumber.customIsInteger(floatNum));

// const array = [1, 2, 3];
// const nonArray = { key: 'value' };
// console.log("Is it an array?", CustomArray.customIsArray(array));
// console.log("Is it an array?", CustomArray.customIsArray(nonArray));

//9

// class ExtendedArray extends Array {
//     static isNumberArray(arr) {
//         return arr.every(element => typeof element === 'number');
//     }

//     static sum(arr) {
//         return arr.reduce((total, current) => total + current, 0);
//     }

//     static max(arr) {
//         return Math.max(...arr);
//     }

//     static min(arr) {
//         return Math.min(...arr);
//     }
// }

// const numberArray = new ExtendedArray(1, 2, 3, 4, 5);
// const mixedArray = new ExtendedArray(1, 'two', 3, 'four', 5);

// console.log('Number array:', numberArray);
// console.log('Mixed array:', mixedArray);

// console.log('Is number array?', ExtendedArray.isNumberArray(numberArray));
// console.log('Is number array?', ExtendedArray.isNumberArray(mixedArray));

// console.log('Sum of the number array:', ExtendedArray.sum(numberArray));
// console.log('Max of the number array:', ExtendedArray.max(numberArray));
// console.log('Min of the number array:', ExtendedArray.min(numberArray));

