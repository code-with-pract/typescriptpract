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
