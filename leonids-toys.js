const toys = [
  {
    name: "Army Men",
    price: 30
  },
  {
    name: "Peppa Pig",
    price: 20
  },
  {
    name: "Mickey Mouse",
    price: 10
  }
];
console.log(toys);
for (const toy of toys) {
  console.log(`Price of toy ${toy.name} is $${toy.price}`);
}
