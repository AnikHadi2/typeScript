class User {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  displayFullName(): void {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`
    );
  }

  static compareAge(user1: User, user2: User): number {
    return user1.age - user2.age;
  }

  static isAdult(user: User): boolean {
    return user.age >= 18;
  }

  static getUserDetails(user: User): string {
    return `Name: ${user.getFullName()}, Age: ${user.age}`;
  }

  static getOldestUser(user1: User, user2: User): User {
    return user1.age > user2.age ? user1 : user2;
  }
}

const user1 = new User("John", "Doe", 30);
const user2 = new User("Jane", "Smith", 25);

user1.displayFullName();

console.log(user1.getFullName()); // Hello, my name is John Doe and I am 30 years old.
// console.log(User.compareAge(user1, user2)); // -5
// console.log(User.isAdult(user2)); // true
// console.log(User.getUserDetails(user1)); // Name: John Doe, Age: 30
// console.log(User.getOldestUser(user1, user2).getFullName()); // John Doe

user1.greet(); // Hello, my name is John Doe and I am 30 years old.

class Student extends User {
  grade: number;

  constructor(firstName: string, lastName: string, age: number, grade: number) {
    super(firstName, lastName, age);
    this.grade = grade;
  }

  displayInfo(): void {
    console.log(`${this.getFullName()} - Grade: ${this.grade}`);
  }
}

const student1 = new Student("Rafi", "Hasan", 25, 80);

student1.displayInfo();
