const products = [
  { name: "John", id: 1, price: 20000 },
  { name: "sina", id: 2, price: 10000 },
  { name: "rock", id: 3, price: 30000 },
  { name: "roman", id: 4, price: 40000 },
  { name: "big", id: 5, price: 50000 },
];

class product {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
}
const sir = new product("rashid", "english");
console.log(sir);
