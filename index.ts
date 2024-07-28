type GetRequestType = "GET" | "POST";

type GetResponseType = {
  statusCode: number;
  body: string;
};

const getRequest: GetRequestType = "GET";
const postRequest: GetRequestType = "POST";

function requestHandler(requestType: GetRequestType) {
  console.log(requestType);
}

requestHandler("GET");
requestHandler("POST");

type UserType = {
  userId: string;
  userName?: string;
  email: string;
  password: string;
};

let users: UserType[];
users = [
  {
    userId: "1",
    userName: "Alice",
    email: "alice@example.com",
    password: "password123",
  },
];

const user2: UserType = {
  userId: "2",
  userName: "Bob",
  email: "bob@example.com",
  password: "password456",
};

users.push(user2);

users.push({
  userId: "3",
  email: "charlie@example.com",
  password: "password789",
});

console.log(users);
