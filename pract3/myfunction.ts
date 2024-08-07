// function addSum(num) {
//   num.toUpperCase();
//   return num + 2;
// }

// addSum("5");

// function addSum(num: number) {
// //   return num + 2;
//   return "Hello"
// }

// better way to write function
function addSum(num: number): number {
  return num + 2;
  //   return "Hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addSum(5);
getUpper("namami devi narmade");

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

signUpUser("sanjeev", "sanjeev@gmail.com", false);

loginUser("sanju", "baba@gmail.com");

// function getValue(myVal: number) : boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

// Better way to write the function
const getHello = (s: string): string => {
  return "";
};

const heros = ["Thor", "Spiderman", "Ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(errmeg: string): void {
  console.log(errmeg);
}

function errorHandler(errmsg: string): never {
  throw new Error(errmsg);
}


export {};
