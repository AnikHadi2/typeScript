let userId: number | string | boolean;

userId = 123;
console.log(typeof userId);

userId = "abc";
console.log(typeof userId);

userId = false;
console.log(typeof userId);

type userIdType = number | string | boolean;

// function displayUser(userId: number | string | boolean) {
function displayUser(userId: userIdType) {
  if (typeof userId === "number") {
    console.log(`User ID: ${userId}`);
  } else if (typeof userId === "string") {
    console.log(`User Name: ${userId}`);
  } else if (typeof userId === "boolean") {
    console.log(`User Status: ${userId ? "Active" : "Inactive"}`);
  } else {
    console.log("Invalid user ID");
  }
}

displayUser(123);
displayUser("John Doe");
displayUser(true);
