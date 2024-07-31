interface IUser {
  id: number;
  name: string;
  age: number;
}

const users: IUser[] = [];

const user1: IUser = {
  id: 1,
  name: "John Doe",
  age: 30,
};

const user2: IUser = {
  id: 2,
  name: "Jane Smith",
  age: 25,
};

const displayUserInfo = (user: IUser): void => {
  console.log(`User ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
};

users.push(user1);
users.push(user2);

for (let user of users) {
  displayUserInfo(user);
}
