
class User {
    constructor(fullName) {
        this.name = fullName
        this.accountBalance = 0
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    makeDeposit (amount){
        this.accountBalance += amount;
    }
    displayBalance() {
        console.log(this.accountBalance)
    }
    transferMoney(recipient, amount) {
        this.makeWithdrawal(amount)
        recipient.makeDeposit(amount)
    }
}

const rosalia = new User ("rosalia");
const cateLeBon = new User ("cate le bon");
const mozart = new User ("wolfgang amadeus mozart");

rosalia.makeDeposit(100)
rosalia.makeDeposit(100)
rosalia.makeDeposit(100)
rosalia.makeWithdrawal(150)
rosalia.displayBalance()

cateLeBon.makeDeposit(200)
cateLeBon.makeDeposit(200)
cateLeBon.makeWithdrawal(50)
cateLeBon.makeWithdrawal(50)
cateLeBon.displayBalance()

mozart.makeDeposit(500)
mozart.makeWithdrawal(100)
mozart.makeWithdrawal(100)
mozart.makeWithdrawal(100)
mozart.displayBalance()

rosalia.transferMoney(mozart, .69)
rosalia.displayBalance()
mozart.displayBalance()