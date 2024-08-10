const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({
  brand: "Honda",
  type: 12,
});

//
function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProdcuts = <T>(prodducts: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return prodducts[myIndex];
};

//////
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, {
  connection: "tnpLab.in",
  username: "shubham",
  password: "tnp@123",
});

//////////
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  auther: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addCart(product: T) {
    this.cart.push(product);
  }
}
