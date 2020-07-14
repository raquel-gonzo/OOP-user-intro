

class User {
    constructor(fullName) {
        this.name = fullName
        this.account = new BankAccount();        
    }
    makeDeposit(amount){
        this.account.deposit(amount);
    }

    makeWithdrawal(amount){
        this.account.withdraw(amount);
    }
    transferMoney(recipient, amount) {
        this.account.withdraw(amount)
        recipient.makeDeposit(amount)
    }
}

class BankAccount {
    constructor(intRate = 0.01, balance = 0){
        this.balance = balance
        this.intRate = intRate
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        if (balance < 0){
            console.log("Insufficient funds: Charging a $5 fee")
            balance -= 5
        }
        return this;
    }
    displayAccountInfo() {
        console.log(
          `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`
        );
        return this;
      }
    
    yieldInterest(intRate) {
        this.balance += this.balance * this.intRate;
        return this;
    }
}

const rachel = new User("Rachel");
console.log(rachel.account.balance)
rachel.account.deposit(200)
console.log(rachel.account.yieldInterest())
console.log(rachel.account.displayAccountInfo())