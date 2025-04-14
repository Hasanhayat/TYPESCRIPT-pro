var a = "Hello, world!";
var b = "Hello, world!";
var c = "Hello, world!";
// ts function to check if two strings are equal
function areStringsEqual(str1, str2) {
    return str1 === str2;
}
// ts object
var person = {
    name: "John",
    age: 30
};
// ts class
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    // ts method to get person info
    PersonClass.prototype.getInfo = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old.");
    };
    return PersonClass;
}());
var personClass = new PersonClass("John", 30);
console.log(personClass.getInfo());
