var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, age, grade) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.displayFullName = function () {
        console.log(this.getFullName());
    };
    return Student;
}(User));
var student1 = new Student("Rafi", "Hasan", 25, 80);
student1.displayFullName();
