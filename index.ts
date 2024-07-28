// let user: object;
let user: { userId: string; userName: string; email: string; password: string };

user = {
  userId: "1",
  userName: "Alice",
  email: "alice@example.com",
  password: "password123",
};

console.log(user);

let user1: {
  userId: string;
  userName?: string;
  email: string;
  password: string;
};

user1 = {
  userId: "1",
  email: "alice@example.com",
  password: "password123",
};

console.log(user1);

let userDemo: {
  userId: string;
  userName?: string;
  email: string;
  password: string;
};

let users: Array<typeof userDemo>;
users = [
  {
    userId: "1",
    userName: "Alice",
    email: "alice@example.com",
    password: "password123",
  },
  {
    userId: "2",
    userName: "Bob",
    email: "bob@example.com",
    password: "password456",
  },
  {
    userId: "3",
    email: "charlie@example.com",
    password: "password789",
  },
];

console.log(users);
