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

const toyToFind = 4;
for (const toy of toys) {
  if (toy.id === toyToFind) {
    // Price increase by 5 percent
    toy.price = toy.price + toy.price * 0.05;
    console.log(`Price of toy ${toy.name} is $${toy.price}`);
  }
}
