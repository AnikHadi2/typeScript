var users = [];
var user1 = {
    id: 1,
    name: "John Doe",
    age: 30,
};
var user2 = {
    id: 2,
    name: "Jane Smith",
    age: 25,
};
var displayUserInfo = function (user) {
    console.log("User ID: ".concat(user.id, ", Name: ").concat(user.name, ", Age: ").concat(user.age));
};
users.push(user1);
users.push(user2);
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    displayUserInfo(user);
}
