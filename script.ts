let a:string = "Hello, world!";
let b:string = "Hello, world!";
let c:string = "Hello, world!";


// ts function to check if two strings are equal
function areStringsEqual(str1: string, str2: string): boolean {
    return str1 === str2;
}

// ts interface
interface Person {
    name: string;
    age: number;
}       



// ts object
let person: Person = {
    name: "John",
    age: 30
}


// ts class
class PersonClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // ts method to get person info
    getInfo(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}
let personClass = new PersonClass("John", 30);
console.log(personClass.getInfo());


