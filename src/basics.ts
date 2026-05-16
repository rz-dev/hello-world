// --- Basic types ---

// Primitive annotations: the `: type` after a name tells TS what it must be.
const username: string = "Ada";
const age: number = 36;
const isAdmin: boolean = true;

// TS can infer types, so annotations are often optional.
// Hovering this in an editor shows `country: string`.
const country = "UK";

// Arrays: T[] means "array of T".
const scores: number[] = [90, 82, 77];

// Tuples: fixed length, fixed types per position.
const point: [number, number] = [10, 20];

// Union types: a value that can be one of several types.
let id: string | number = 123;
id = "abc"; // also fine

// Literal types: a value restricted to specific constants.
let direction: "up" | "down" | "left" | "right" = "up";
// direction = "north"; // would be a type error

// Type aliases give a name to a shape you reuse.
type User = {
  name: string;
  age: number;
  email?: string; // `?` makes the property optional
};

const ada: User = { name: "Ada", age: 36 };

// --- Functions ---

// Parameter types and return type.
function add(a: number, b: number): number {
  return a + b;
}

// Return type can be inferred; `greet` returns string automatically.
function greet(name: string) {
  return `Hello, ${name}!`;
}

// Optional and default parameters.
function welcome(name: string, title: string = "friend"): string {
  return `Welcome, ${title} ${name}`;
}

// Rest parameters: collect remaining args into an array.
function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

// `void` means the function returns nothing useful.
function log(message: string): void {
  console.log(`[log] ${message}`);
}

// Arrow function with a typed parameter and inferred return.
const double = (n: number) => n * 2;

// --- Run it ---

log(`user: ${username}, age: ${age}, admin: ${isAdmin}, country: ${country}`);
log(`scores: ${scores.join(", ")}`);
log(`point: (${point[0]}, ${point[1]})`);
log(`id is now: ${id}`);
log(`direction: ${direction}`);
log(`user object: ${JSON.stringify(ada)}`);

log(`add(2, 3) = ${add(2, 3)}`);
log(`greet("Ada") = ${greet("Ada")}`);
log(`welcome("Ada") = ${welcome("Ada")}`);
log(`welcome("Ada", "Dr.") = ${welcome("Ada", "Dr.")}`);
log(`sum(1,2,3,4) = ${sum(1, 2, 3, 4)}`);
log(`double(7) = ${double(7)}`);

// Making this file a module (it has its own scope, doesn't leak names globally).
export {};
