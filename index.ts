abstract class User {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  abstract displayFullName(): void;
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

class Student extends User {
  grade: number;

  constructor(firstName: string, lastName: string, age: number, grade: number) {
    super(firstName, lastName, age);
    this.grade = grade;
  }

  displayFullName(): void {
    console.log(this.getFullName());
  }
}

const student1 = new Student("Rafi", "Hasan", 25, 80);

student1.displayFullName();
