// class implements interface
interface UserFormatter {
  formatUser: () => string;
}

export class User implements UserFormatter {
  constructor(private fullName: string, private age: number) {}

  formatUser = () => {
    return `name: ${this.fullName}, age: ${this.age}`;
  };
}

let user = new User("Mr. Potato", 32);
// console.log(user);
console.log(user.formatUser());
