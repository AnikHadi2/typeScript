"use strict";
const userForm = document.querySelector("form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const userCountry = document.querySelector("#country");
const userDOB = document.querySelector("#dob");
const userFeedBack = document.querySelector("#feedBack");
const errorMsg = document.querySelector("#errorMsg");
userForm.addEventListener("submit", (event) => {
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
    }
    else {
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
