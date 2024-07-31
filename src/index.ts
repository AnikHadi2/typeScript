const userForm = document.querySelector("form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userPassword = document.querySelector("#password") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userDOB = document.querySelector("#dob") as HTMLDataElement;
const userFeedBack = document.querySelector("#feedBack") as HTMLTextAreaElement;
const errorMsg = document.querySelector("#errorMsg") as HTMLParagraphElement;

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = userName.value.trim();
  const email = userEmail.value.trim();
  const password = userPassword.value.trim();
  const country = userCountry.value;
  const dob = new Date(userDOB.value);
  const feedBack = userFeedBack.value;

  if (!name || !email || !password || !country || !dob) {
    errorMsg.innerText = "Please fill out all fields";
    return;
  }

  // validate date of birth
  const currentDate = new Date();
  if (dob > currentDate) {
    errorMsg.innerText = "Invalid date of birth";
    return;
  } else {
    errorMsg.innerText = "";
  }

  // store user data in local storage
  const userData = {
    name,
    email,
    password,
    country,
    dob: dob.toISOString(),
    feedBack,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  console.log(userData);
});
