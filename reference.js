
// Basic Syntax:
// constructor method can have parameters. arguments are what needs to be provided to thos parameters. 
class className {
    constructor(parameter1, parameter2) {   // parameters, arguments (what needs to be provided)
        this.parameter1 = attribute1
        this.parameter2 = attribute2
    }
}

// Using OOP to create a [user for a] banking application:
class User {
    constructor() {
        this.name = "Rachel"
        this.email = "example@email.com"
        this.accountBalance = 0
    }
}

// instantiate some new users:
const tyler = new User();
const gudetama = new User();

console.log(tyler.name) // output: Rachel
console.log(gudetama.name) // output: Rachel

// Set the values for the instance's attributes:
tyler.name = "Tyler";
gudetama.name = "Gudetama";

// in the User class, you can pass parameters to the constructor to identify what needs to be provided in order to instantiate a new user(const).
// See the re-written User class below:

class User {
    constructor(username, emailAddress) { // 2 parameters are named username and emailAddress.
        this.name = username        // use the values passed in to set the name and email attrubutes.
        this.email = emailAddress 
        this.accountBalance = 0
    }
}

// to create users:
const rachel = new User ("Rachel Gonzalez", "example@email.com");
const gudetama = new User ("Sanrio Gudetama", "email@example.com")

// attributes are defined in the 'constructor' method. it is called when a new object is instantiated.

// Methods add functionality to a class. Methods must be called from an instance of a class. Methods (these particular functions) cannot be called independantly.

// Adding a method to our User class:
class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) {               // this function is nested within the class User. Every user will have this method when a new user is instantiated. 
        this.accountBalance += amount;
    }
}

// call the method to make a deposit:
rachel.makeDeposit(100)
gudetama.makeDeposit(100)
console.log(rachel.accountBalance)
console.log(gudetama.accountBalance)