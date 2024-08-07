// let User = {
//   name: "Sanju baba",
//   email: "baba@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// // createUser({ name: "baba", isPaid: true });
// let newUser = { name: "Chotu", isPaid: false, email: "chotu@gmail.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "ReactJs", price: 399 };
// }

// Type Aliases

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type Mystring = string;

// function modifyUser(user: User): User {
//   return { name: "", email: "", isActive: false };
// }

// modifyUser({ name: "", email: "", isActive: false });

// Readonly and optional in typescript

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number;
};

let myUser: User = {
  _id: "123",
  name: "sanju",
  email: "sanju@yahoo.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & {
  cvv: string
}



myUser.email = "baba@gmail.com";
// myUser._id = "124";

export {};
