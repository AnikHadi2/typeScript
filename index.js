// function Signature
// let userInfo1: () => void;
var userInfo1 = function () {
    console.log("My name is Hadiuzzaman Anik & age 27 years old.");
};
userInfo1();
// let userInfo2: (name: string, age: number ) => void;
var userInfo2 = function (name, age) {
    console.log("My name is ".concat(name, " & age ").concat(age, " years old."));
};
userInfo2("Hadiuzzaman Anik", 27);
// let userInfo3: (name: string, age: number ) => string;
var userInfo3 = function (name, age) {
    return "My name is ".concat(name, " & age ").concat(age, " years old.");
};
console.log(userInfo3("Hadiuzzaman Anik", 27));
