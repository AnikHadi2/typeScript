var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.displayFullName = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.getFullName(), " and I am ").concat(this.age, " years old."));
    };
    User.compareAge = function (user1, user2) {
        return user1.age - user2.age;
    };
    User.isAdult = function (user) {
        return user.age >= 18;
    };
    User.getUserDetails = function (user) {
        return "Name: ".concat(user.getFullName(), ", Age: ").concat(user.age);
    };
    User.getOldestUser = function (user1, user2) {
        return user1.age > user2.age ? user1 : user2;
    };
    return User;
}());
var user1 = new User("John", "Doe", 30);
var user2 = new User("Jane", "Smith", 25);
user1.displayFullName();
console.log(user1.getFullName()); // Hello, my name is John Doe and I am 30 years old.
console.log(User.compareAge(user1, user2)); // -5
console.log(User.isAdult(user2)); // true
console.log(User.getUserDetails(user1)); // Name: John Doe, Age: 30
console.log(User.getOldestUser(user1, user2).getFullName()); // John Doe
user1.greet(); // Hello, my name is John Doe and I am 30 years old.
