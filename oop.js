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
  
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
    }
  let canary = new Bird("Tweety");
  let ownProps = [];
  for (let property in canary){
      if(canary.hasOwnProperty(property)){
      ownProps.push(property);
  }
}
 
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 2
  let beagle = new Dog("Snoopy");

  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");
  let ownProps = [];
  let prototypeProps = [];
  for (let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    }else{
      prototypeProps.push(property)
    }
  }

  function Dog(name) {
    this.name = name;
  }
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog){
      return true 
    }else{
      return false;
    }
  
  
  }

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 4,
    eat: function(){
      console.log("chomp!!")
    },
    describe: function(){
      console.log("My name is" + this.name)
    }
  
  };
  
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };  

  function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);
  
  function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);  

  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
    
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function(){
      console.log("nom nom nom")
    }
  
  };

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype);

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype= Object.create(Animal.prototype)
let beagle = new Dog();

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    console.log ("Woof!")
}
let beagle = new Dog();

function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function (){
    return "Alas, this is a flightless bird."
}
let penguin = new Penguin();
console.log(penguin.fly());

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
  obj.glide = function(){
    console.log("Gliding!!")
  }  

}

glideMixin(boat);
glideMixin(bird);

function Bird() {
  let weight = 15;
  this.getWeight = function(){
      return weight;
  }
 }

 function makeNest() {
  console.log("A cozy nest is ready");
}
makeNest();


//immediatly invoked function
(function(){
  console.log("A cozy nest is ready");
})();



let funModule = (function () {
  return {
    isCuteMixin :function(obj) {
    obj.isCute = function() {
    return true;
  };
  },
    singMixin : function(obj) {
    obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
  }
}
})();