let userName: Array<string> = [];
// let userName: string[] = [];
userName.push("John", "Alice", "Bob");
console.log(userName);

let age: Array<number> = [25, 30, 35];
// let age: number[] = [25, 30, 35];
console.log(age);

let isActive: Array<boolean>;
// let isActive: boolean[];
isActive = [true, false, false, true, false];
console.log(isActive);

let mixedArray: Array<string | number> = ["John", 25, "Alice", 30, 35];
// let mixedArray: (string | number)[] = ["John", 25, "Alice", 30, 35];
console.log(mixedArray);
