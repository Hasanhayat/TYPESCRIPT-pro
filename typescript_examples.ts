// Generics Example
function identity<T>(arg: T): T {
    return arg;
}

// Generic Interface
interface GenericArray<T> {
    [index: number]: T;
}

// Enums Example
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Types Example
type Point = {
    x: number;
    y: number;
}

// Union Types
type ID = string | number;

// Intersection Types
interface Named {
    name: string;
}

interface Aged {
    age: number;
}

type Person = Named & Aged;

// Using the examples
const numberArray: GenericArray<number> = [1, 2, 3];
const stringArray: GenericArray<string> = ["a", "b", "c"];

const point: Point = { x: 10, y: 20 };
const person: Person = { name: "John", age: 30 };

// Function using generics
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// Usage examples
console.log(identity<string>("Hello"));
console.log(identity<number>(42));
console.log(Direction.Up);
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"])); 