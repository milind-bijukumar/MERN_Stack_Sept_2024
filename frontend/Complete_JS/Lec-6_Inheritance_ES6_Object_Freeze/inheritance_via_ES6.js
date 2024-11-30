/**

   Protoypal inheritance:

     - Inheritance means re-usability.
     - It's a mechnism where one object can inherit the properties and methods  from another object.
     - Prototypal inheritance allows object to inherit their properties and methods from their prototype. (using ES5 way).
     - In JS, via protypal inhertiance you can add any methods or properties to the objects.

     what is __proto__ in protypal inheritance?

      - It's non-standard property that exists for all the objects.
      - __proto__ property provides a way to directly access and modify the prototype of an object

    Inheritance via ES6 way

      - It's a mechnaism where the child class inherit the proerties and methods from the immediate parent class.

      - to achieve inheritance in ES6, you need to extends keyword

 */

const arr = [1, 2, 3, 4, 5];
const arr1 = [5, 6, 7, 8, 9, 10];

Array.prototype.sum = function () {
  let sum = 0;

  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }

  console.log(sum);
};

arr.sum();
arr1.sum();

// usescase of custom prototypal inheritance via ES5 way using __proto__

const account = {
  bal: 0,
  deposit(amt) {
    if (amt > 0) {
      this.bal += amt;
      console.log(`You balance amount is ${this.bal}`);
    }
  },

  withdraw(amt) {
    if (amt > 0 && amt <= this.bal) {
      this.bal -= amt;
      console.log(
        `Widrawal amount is ${amt} and your current balnace is  ${this.bal}`
      );
    } else {
      console.log(
        `Your widrawal amount is more than your balance amount and you can't widrawal this much amount`
      );
    }
  },
};

const savingsAccount = {
  interestRate: 0.05,
  calculateInterest() {
    const interest = this.bal * this.interestRate;
    this.deposit(interest);
  },
};

savingsAccount.__proto__ = account;

savingsAccount.deposit(1000);

savingsAccount.deposit(5000);

savingsAccount.withdraw(3000);

savingsAccount.calculateInterest();

// Inheritance via ES6 way

class Account {
  constructor(bal = 0) {
    this.bal = bal;
  }

  deposit(amt) {
    if (amt > 0) {
      this.bal += amt;
      console.log(`You balance amount is ${this.bal}`);
    }
  }

  withdraw(amt) {
    if (amt > 0 && amt <= this.bal) {
      this.bal -= amt;
      console.log(
        `Widrawal amount is ${amt} and your current balnace is  ${this.bal}`
      );
    } else {
      console.log(
        `Your widrawal amount is more than your balance amount and you can't widrawal this much amount`
      );
    }
  }
}

class SavingsAcount extends Account {
  constructor(bal, interestRate = 0.05) {
    super(bal);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    const interest = this.bal * this.interestRate;
    this.deposit(interest);
  }
}

const savingsAcc = new SavingsAcount(1000);
savingsAcc.deposit(2000);

savingsAcc.withdraw(1000);

savingsAcc.calculateInterest();
