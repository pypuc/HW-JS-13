// 1
const user = {
    name: "Katy",
    age: 90,
    hobby: "skydiving",
    premium: true,
}
const {name, age, hobby, premium, mood = "happy"} = user;
// user.mood = "happy";
console.log(user)

// 2

const exampleObject = {
    name: "Sigma",
    age: 25,
    occupation: "developer",
};
const {name: nameSigma, age: ageExampleObject, occupation} = exampleObject

// 3

const employes = {
    Turka: 5,
    Bob: 12,
    Babyra: 8,
};
const {Turka, Bob, Babyra} = employes;

// 4

const employees = {
    Nuna: 500,
    Roma: 200,
    Borba: 800,
};
const {Nuna, Roma, Borba} = employees;

// 5

const prodducts = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Cherry", price: 50 },
];

const [{name: nameGoods1, priceGoods1, quantityGoods1}, {nameGoods2, priceGoods2, quantityGoods3}, { nameGoods3, priceGoods3}] = prodducts
console.log(prodducts)

// 6

const products = [
    { name: "Laptop", price: 1000, quantity: 2 },
    { name: "Phone", price: 500, quantity: 4 },
    { name: "Tablet", price: 300, quantity: 3 },
    { name: "Headphones", price: 150, quantity: 5 },
];
const [{name: nameComputer, price: priceComputer, quantity: quantityComputer}, {name: namePhone, price: pricePhone, quantity: quantityPhone}, {name: nameTablet, price: priceTablet, quantity: quantityTablet}, {name: nameHeadphones, price: priceHeadphones, quantity: quantityHeadphones}] = prodducts
console.log(products)

// 7

const account = {
    balance: 0,
    transactions: [],
    getBalance() {
      return this.balance;
    },
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        this.transactions.push({ type: "DEPOSIT", amount });
        return `Поповнення на ${amount}. Баланс: ${this.balance}`;
      } else {
        return "Сума має бути більшою за нуль.";
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push({ type: "WITHDRAW", amount });
        return `Знято ${amount}. Баланс: ${this.balance}`;
      } else if (amount > this.balance) {
        return "Недостатньо коштів.";
      } else {
        return "Сума має бути більшою за нуль.";
      }
    },
    getTransactions() {
      return this.transactions;
    },
  };
  console.log(account.deposit(500));
  console.log(account.withdraw(200));
  console.log("Баланс:", account.getBalance());
  console.log("Транзакції:", account.getTransactions()); 
  