
class User {
    constructor(fullName) {
        this.name = fullName
        this.accountBalance = 0
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    makeDeposit (amount){
        this.accountBalance += amount;
        return this;

    }
    displayBalance() {
        console.log(this.accountBalance)
        return this;
    }
    transferMoney(recipient, amount) {
        this.makeWithdrawal(amount)
        recipient.makeDeposit(amount)
        return this;
    }
}

const rosalia = new User ("rosalia");
const cateLeBon = new User ("cate le bon");
const mozart = new User ("wolfgang amadeus mozart");

rosalia.makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawal(150).displayBalance().transferMoney(mozart, .69).displayBalance()

cateLeBon.makeDeposit(200).makeDeposit(200).makeWithdrawal(50).makeWithdrawal(50).displayBalance()

mozart.makeDeposit(500).makeWithdrawal(100).makeWithdrawal(100).makeWithdrawal(100).displayBalance().displayBalance()
