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

7. **Custom Type**: you can create your own type

   ```js
   type User = { userName: string, userId: number };

   let users: User[];
   users = [];

   let user1: User;
   user1 = { userName: "anis", userId: 101 };
   users.push(user1);

   let user2: User;
   user2 = { userName: "rabu", userId: 102 };
   users.push(user2);

   let user3: User;
   user3 = { userName: "lucky", userId: 103 };
   users.push(user3);

   // console.log(users);

   type RequestType = "GET" | "POST";
   let getRequest: RequestType;
   getRequest = "GET";

   function requestHandler(requestType: RequestType) {
     console.log(requestType);
   }
   requestHandler("GET");
   ```
