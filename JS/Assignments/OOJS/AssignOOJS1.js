class BankAccount {
    constructor(name, ACbalance) {
        this.name = name
        this.ACbalance = ACbalance
    }
    checkBalacne() {
        console.log(`Account balance of ${this.name} is ${this.ACbalance}`)
    }
    deposit(Damount) {
        if (Damount > 0) {
            this.ACbalance = this.ACbalance + Damount
            console.log(`Deposited Rs. ${Damount}. New balance Rs. ${this.ACbalance}`)
        }
        else {
            console.log("Invalid deposit amount please enter a positeve amount")
        }
    }
    withdraw(Wamount) {
        if (Wamount < this.ACbalance && Wamount>0) {
            this.ACbalance -= Wamount
            console.log(`Withdraw Rs. ${Wamount}. New balance Rs. ${this.ACbalance}`)
        }
        else if (Wamount > this.ACbalance) {
            console.log("Insufiecient fund for withdraw")
        }
        else {
            console.log("Invalid withdraw amount please enter a positeve amount")
        }
    }
}

const myAccount=new BankAccount('samidul',2000)
myAccount.checkBalacne(); //Account balance of samidul is 2000

myAccount.deposit(500)  //Deposited Rs. 500. New balance Rs. 2500
myAccount.deposit(-444); //Invalid deposit amount please enter a positeve amount

myAccount.withdraw(1000)  //Withdraw Rs. 1000. New balance Rs. 1500
myAccount.withdraw(200000)  //Insufiecient fund for withdraw
myAccount.withdraw(-589)  //Invalid withdraw amount please enter a positeve amount

myAccount.checkBalacne(); //Account balance of samidul is 1500