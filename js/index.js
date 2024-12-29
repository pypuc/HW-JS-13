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


  