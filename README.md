# TypeScript Documentation

- prerequisities: Javascript

## Table of Contents

1. [Basic Typescript Topics](#1-basic-typescript-topics)

   [1.1 Introduction to Typescript](#11-introduction-to-typescript)

   [1.2 Data Types: Built-in / Basic Types](#12-data-types-built-in--basic-types)

   [1.3 Data Types: User defined types](#13-data-types-user-defined)

   [1.4 tsconfig](#14-tsconfig)

   [1.5 function](#15-function)

2. [Intermediate TypeScript Topics](#2-intermediate-typescript-topics)

   [2.1 Creating types from types](#21-creating-types-from-types)

   [2.2 Narrowing](#22-narrowing)

   [2.3 Type guards](#23-type-guards-example)

   [2.4 DOM Manipulation with typescripts](#24-dom-manipulation-with-typescript)

3. [Advanced TypeScript Topics]()

## 1. Basic Typescript Topics

### 1.1 Introduction to Typescript

What is TypeScript?

- In a simple words, Additional Types (tuples, enum, interfaces, generics etc) + JavaScript = TypeScript
- It is a superset of JS
- developed (2012) and maintained by Microsoft
- we can use typeof to check data type
- Js is dynamically types -> let x = 20;
- Typescript add static typing to js -> let x: number = 20;

Why TypeScript?

- JS Check types in run time while typescript add static typing to JS so we can handle errors before running the program. We can handle errors beofre running the program.
- increase readability and code quality
- We can use it React, Vue, popular JS libraray Angular use TypeScript.
- It can be used in both: client and server side.
- Intellisense IDE Support while coding: code completion, content assist and code hinting

TS Versions

- earlier versions
- TypeScript 1.0 October 2014
- TypeScript 2.0 September 2016
- TypeScript 3.0 July 2018
- TypeScript 4.0 - latest release August 2020
- TypeScript 5.4 - 2024

Code Example of Javascript and TypeScript

```js
// index.js
// without typescript
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(20, 30);
addNumbers(20, "30");

// with typescript
// without typescript
function addNumbers(num1: number, num2: number) {
  console.log(num1 + num2);
}

addNumbers(20, 30); // no error
addNumbers(20, "30"); // error

// without typescript
let x;
x = 20; // correct
x = "anisul"; // correct
x = true; // correct
x = [10, 20]; // correct

// with typescript
let x: number;
x = 20; // correct
x = "20"; // Not correct
x = true; // Not correct
x = [10, 20]; // Not correct
```

How does typescript work?

- index.ts -> tsc index.ts -> index.js

Environment setup

- Install node & typescript

  ```js
      local installation: npm intsall typescript --save-dev
      Or
      global installation: npm install -g typescript
  ```

- check various versions:

  ```js
    node --version
    npm --version
    tsc --version
  ```

First typescript program

- typescript file extension is .ts
- Run the following program using `tsc index.ts --watch` command and then `node index.js`

  ```js
  // index.ts

  // without ts
  function addNumbers(num1, num2) {
    console.log(num1 + num2);
  }

  addNumbers(20, 30);
  addNumbers(20, "30");

  // correct one using ts
  function addNumbers(num1: number, num2:number) {
    console.log(num1 + num2);
  }

  addNumbers(20, 30);
  addNumbers(20, "30");


  let num1 = 20;
  console.log(num1);

  let name= "anisul islam";
  name. //intellisense support will be here
  ```

### 1.2 Data Types: Built-in / Basic Types

- Any (super type)
  - built in types: number, string, boolean, void, null, undefined, never
  - user-defined types: Arrays, Enums, Classes, interfaces etc.
  - for avoiding typescript in entire file:
    `// @ts-nocheck`

In TypeScript, you can use basic types to specify the type of variables, function parameters, and return values. Here are some of the basic types in TypeScript:

1. **number**: Represents both integer and floating-point numbers.

   ```typescript
   let age: number = 25;
   let price: number = 9.99;
   ```

2. **string**: Represents a sequence of characters.

   ```typescript
   let name: string = "John";
   ```

3. **boolean**: Represents a true or false value.

   ```typescript
   let isDone: boolean = false;
   ```

4. **any**: Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values

   ```typescript
   let data: any = 42;
   data = "Hello";

   let password: any;
   let passwords: any[];
   ```

5. **void**: Represents the absence of a value, typically used as the return type of functions that don't return anything.

   ```typescript
   function logMessage(): void {
     console.log("This is a log message.");
   }
   ```

6. **null** and **undefined**: Represent null and undefined values, respectively.

   ```typescript
   let n: null = null;
   let u: undefined = undefined;
   ```

7. **never**: Represents a value that never occurs, such as a function that throws an error or an infinite loop.

   ```typescript
   function throwError(message: string): never {
     throw new Error(message);
   }
   ```

These basic types provide a foundation for specifying the types of variables and data in TypeScript. You can use them to ensure type safety in your code and catch type-related errors at compile time.

- inferred Typing

  ```js
  let userName = "anis"; // data type inferred as string
  ```

### 1.3 Data Types: User defined

8. **class Type OOP** - You can create class type as well. class can have constructor, properties, methods. create object let objectName = new className()

   - Class and constructor Example

   ```js
   class User {
     // properties, methods, constructor
     userName: string;
     age: number;

     constructor(userName: string, age: number) {
       this.userName = userName;
       this.age = age;
     }

     display(): void {
       console.log(`username: ${this.userName}, age: ${this.age}`);
     }
   }

   let user1 = new User("Anisul Islam", 25);
   user1.display();

   let user2 = new User("Rabeya Islam", 31);
   user2.display();
   ```

   - Inheritance: inheritance helps us to acquire properties of one class to another

   ```js
   class User {
     userName: string;
     age: number;

     constructor(userName: string, age: number) {
       this.userName = userName;
       this.age = age;
     }

     display(): void {
       console.log(`username: ${this.userName}, age: ${this.age}`);
     }
   }

   class Student extends User {
     studentId: number;

     constructor(userName: string, age: number, studentId: number) {
       super(userName, age);
       this.studentId = studentId;
     }
     display(): void {
       console.log(
         `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
       );
     }
   }

   let student1 = new Student("keya", 31, 1302020015);
   student1.display();

   let user1 = new User("Anisul Islam", 25);
   user1.display();

   // let user2 = new User("Rabeya Islam", 31);
   // user2.display();
   ```

   - **Abstract class** - abstraction helps us to hide the implementation of something. class declared with abstract keyword. object can not be created from abstract class. if a class extends abstract class; it must inherit all the abstract methods

   ```js
   abstract class User {
     userName: string;
     age: number;

     constructor(userName: string, age: number) {
       this.userName = userName;
       this.age = age;
     }

     abstract display(): void;
   }

   class Student extends User {
     studentId: number;

     constructor(userName: string, age: number, studentId: number) {
       super(userName, age);
       this.studentId = studentId;
     }
     display(): void {
       console.log(
         `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
       );
     }
   }

   let student1 = new Student("keya", 31, 1302020015);
   student1.display();

   ```

   - **Encapsulation and access modifiers** - 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism. Encapsulation helps us to manage the visibility of class members. 4 Access modifiers: public, private, protected, readonly

   ![Access Modifiers](images/access-modifiers.png)

   ```js
     // public, private, protected, readonly
     // setter and getter
     class User {
       readonly userName: string;
       public age: number;

       constructor(userName: string, age: number) {
         this.userName = userName;
         this.age = age;
       }

       display(): void {
         console.log(`username: ${this.userName}, age: ${this.age}`);
       }
     }

     class Student extends User {
       private studentId: number;

       constructor(userName: string, age: number, studentId: number) {
         super(userName, age);
         this.studentId = studentId;
       }
       display(): void {
         console.log(
           `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
         );
       }

       setStudentId(studentId: number): void {
         this.studentId = studentId;
       }

       getStudentId(): number {
         return this.studentId;
       }
     }

     let student1 = new Student("keya", 31, 1302020015);
     student1.setStudentId(1302020017);
     console.log(student1.getStudentId());
     // student1.display();

     let user1 = new User("robi", 23);
     console.log(user1.userName);
     // user1.display();
   ```

### Inheritance

Inheritance allows a class to inherit properties and methods from another class.

### Encapsulation

Encapsulation restricts direct access to some of an object's components, which can be achieved using access modifiers (`private`, `protected`, `public`).

### Polymorphism

Polymorphism allows methods to do different things based on the object it is acting upon, even though they share the same name.

### Abstraction

Abstraction allows you to define methods that must be created within any child classes built from the abstract class.

Here’s an example that demonstrates all four principles:

```typescript
// Abstract class (Abstraction)
abstract class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  // Abstract method
  abstract getDescription(): string;
}

// Student class (Inheritance)
class Student extends Person {
  private _grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this._grade = grade;
  }

  get grade(): number {
    return this._grade;
  }

  // Implementing abstract method (Polymorphism)
  getDescription(): string {
    return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Teacher class (Inheritance)
class Teacher extends Person {
  private _subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this._subject = subject;
  }

  get subject(): string {
    return this._subject;
  }

  // Implementing abstract method (Polymorphism)
  getDescription(): string {
    return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

// Create instances and demonstrate polymorphism
const student = new Student("Alice", 20, 90);
const teacher = new Teacher("Bob", 45, "Mathematics");

console.log(student.getDescription()); // Student: Alice, Age: 20, Grade: 90
console.log(teacher.getDescription()); // Teacher: Bob, Age: 45, Subject: Mathematics

// Encapsulation: attempting to access private properties directly will result in an error
// console.log(student._name); // Error: Property '_name' is private and only accessible within class 'Person'.
// console.log(teacher._subject); // Error: Property '_subject' is private and only accessible within class 'Teacher'.

// Use getter methods to access encapsulated properties
console.log(student.name); // Alice
console.log(teacher.subject); // Mathematics
```

### Explanation

1. **Abstraction**:

   - The `Person` class is abstract and contains an abstract method `getDescription`.
   - This method must be implemented by any non-abstract subclass of `Person`.

2. **Encapsulation**:

   - Private properties (`_name`, `_age`, `_grade`, `_subject`) are used to restrict direct access.
   - Getter methods (`get name()`, `get age()`, `get grade()`, `get subject()`) are provided to access these private properties.

3. **Inheritance**:

   - The `Student` and `Teacher` classes inherit from the `Person` class.
   - They call the constructor of the parent class using `super(name, age)`.

4. **Polymorphism**:
   - Both `Student` and `Teacher` implement the `getDescription` method from the `Person` class.
   - This method behaves differently based on whether it's called on a `Student` or `Teacher` instance.

This example demonstrates how you can use these OOP principles in TypeScript to create a well-structured and maintainable codebase.
