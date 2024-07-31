// function Signature

// let userInfo1: () => void;
const userInfo1 = (): void => {
  console.log(`My name is Hadiuzzaman Anik & age 27 years old.`);
};
userInfo1();

// let userInfo2: (name: string, age: number ) => void;
const userInfo2 = (name: string, age: number): void => {
  console.log(`My name is ${name} & age ${age} years old.`);
};
userInfo2("Hadiuzzaman Anik", 27);

// let userInfo3: (name: string, age: number ) => string;
const userInfo3 = (name: string, age: number): string => {
  return `My name is ${name} & age ${age} years old.`;
};
console.log(userInfo3("Hadiuzzaman Anik", 27));
