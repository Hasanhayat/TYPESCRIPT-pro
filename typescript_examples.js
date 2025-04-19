// Generics Example
function identity(arg) {
    return arg;
}
// Enums Example
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// Using the examples
var numberArray = [1, 2, 3];
var stringArray = ["a", "b", "c"];
var point = { x: 10, y: 20 };
var person = { name: "John", age: 30 };
// Function using generics
function getFirstElement(arr) {
    return arr[0];
}
// Usage examples
console.log(identity("Hello"));
console.log(identity(42));
console.log(Direction.Up);
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
