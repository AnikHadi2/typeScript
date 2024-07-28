var getRequest = "GET";
var postRequest = "POST";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
requestHandler("POST");
var users;
users = [
    {
        userId: "1",
        userName: "Alice",
        email: "alice@example.com",
        password: "password123",
    },
];
var user2 = {
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
