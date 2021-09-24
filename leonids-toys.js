const toys = [
  {
    id: 1,
    name: "Army Men",
    price: 30
  },
  {
    id: 2,
    name: "Peppa Pig",
    price: 20
  },
  {
    id: 3,
    name: "Mickey Mouse",
    price: 10
  }
];

//Defining a new toy objects

const paw_patrol = {
  id: 4,
  name: "Paw Patrol",
  price: 5
};

const shimer = {
  id: 6,
  name: "Shimer",
  price: 7
};
toys.push(paw_patrol);
toys.push(shimer);

console.log(toys);
for (const toy of toys) {
  console.log(`Price of toy ${toy.name} is $${toy.price}`);
}
