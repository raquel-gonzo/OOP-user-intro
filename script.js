
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

const firstAcct = new BankAccount();
const secondAcct = new BankAccount();

firstAcct.deposit(1).deposit(1).deposit(1).withdraw(1).displayAccountInfo().yieldInterest()

secondAcct.deposit(5).deposit(5).withdraw(1).withdraw(1).withdraw(1).withdraw(1).yieldInterest().displayAccountInfo()