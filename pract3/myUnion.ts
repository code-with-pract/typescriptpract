let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let sanju: User | Admin = {
  name: "Baba",
  id: 231,
};

sanju = { username: "Baba atri", id: 231 };

// function getDbId(id: number | string) {
//   // Making some api calls
//   console.log(`Db Id is :${id}`);
// }

getDbId(3);
getDbId("5");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// Array
const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
const data2: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";

export {};
