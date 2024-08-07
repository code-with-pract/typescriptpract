//  String
let greetings: string = "Sanjeev";

greetings.toLowerCase();
console.log(greetings);

// Number
let mynum: number = 2345.54;
// let mynu = 2345.54;

mynum.toFixed();
// mynum = "sa";
console.log(mynum);

// Boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

// Don't use any
// let hero;
let hero: string;

function getHero() {
  // return true
  return "thor";
}

hero = getHero();

export {};
