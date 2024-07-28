var userId;
userId = 123;
console.log(typeof userId);
userId = "abc";
console.log(typeof userId);
userId = false;
console.log(typeof userId);
// function displayUser(userId: number | string | boolean) {
function displayUser(userId) {
    if (typeof userId === "number") {
        console.log("User ID: ".concat(userId));
    }
    else if (typeof userId === "string") {
        console.log("User Name: ".concat(userId));
    }
    else if (typeof userId === "boolean") {
        console.log("User Status: ".concat(userId ? "Active" : "Inactive"));
    }
    else {
        console.log("Invalid user ID");
    }
}
displayUser(123);
displayUser("John Doe");
displayUser(true);
