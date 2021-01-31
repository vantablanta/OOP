let dog = {
    name :"dogy",
    numLegs: 4
};

let dog = {
    name: "Spot",
    numLegs: 4
  };
console.log(dog.name);
console.log(dog.numLegs);

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function (){
      return "This dog has 4 legs."
    }
  };
dog.sayLegs();

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};  
dog.sayLegs();

//constructor functions
function Dog(){
    this.name ='Doggy',
    this.color = "Black",
    this.numLegs = 4
}
// new instance of the constructor 
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
let hound= new Dog;

function Dog(name, color) {
    this.name = name
    this.color = color
    this.numLegs = 4;
}
let terrier = new Dog('Hemnry', 'Black');

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(12);
  myHouse instanceof House;