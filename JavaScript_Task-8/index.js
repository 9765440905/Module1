// 1. Write a person class to hold all the details.
class person {
  constructor(Name, Email, Age, Weight) {
    this.Name = Name;
    this.Email = Email;
    this.Age = Age;
    this.Weight = Weight;
  }
  person_Name() {
    return `This is ${this.Name}`;
  }
  person_Email() {
    return `Email-id is ${this.Email}`;
  }
  person_Age() {
    return `Age is ${this.Age}`;
  }
  static person_Weight() {
    return `Weight is ${this.Weight}`;
  }
}
const obj = new person("Tushar", "tushar@gamil.com", "26", "55");
console.log(obj);

// 2. write a class to calculate uber price
class Uberprice {
  constructor(name, distance, price) {
    this.name = name;
    this.DistanceCovered = distance;

    switch (name) {
      case "Uber Delivers": {
        price = 8;
        this.price = price;
        break;
      }
      case "Go Executive": {
        price = 11.46;
        this.price = price;
        break;
      }
      case "UberGo": {
        price = 11.46;
        this.price = price;
        break;
      }
      case "Go Sedan": {
        price = 12.25;
        this.price = price;
        break;
      }
      case "Premier Executive": {
        price = 14.22;
        this.price = price;
        break;
      }
      case "Premier": {
        price = 14.22;
        this.price = price;
        break;
      }
      case "Go Intercity": {
        price = 15.79;
        this.price = price;
        break;
      }

      case "Sedan Intercity": {
        price = 17.5;
        this.price = price;
        break;
      }
      case "UberXL": {
        price = 19.76;
        this.price = price;
        break;
      }
      case "XL Intercity": {
        price = 23.3;
        this.price = price;
        break;
      }
    }
  }
calculatePrice() {
    let FinalPrice = this.price * this.DistanceCovered;
    console.log(`
     Vechile Name       : ${this.name}
     Price per km       : Rs ${this.price}
     Distance Covered   : ${this.DistanceCovered} km
     FarePrice          : Rs ${Math.round(FinalPrice)}`);
  }
}
let Customer1 = new Uberprice("Uber Delivers", 2);
Customer1.calculatePrice();
let Customer2 = new Uberprice("Go Executive", 3);
Customer2.calculatePrice();
let Customer3 = new Uberprice("UberGo", 4);
Customer3.calculatePrice();
let Customer4 = new Uberprice("Go Sedan", 5);
Customer4.calculatePrice();
let Customer5 = new Uberprice("Premier Executive", 6);
Customer5.calculatePrice();
let Customer6 = new Uberprice("Premier", 7);
Customer6.calculatePrice();
let Customer7 = new Uberprice("Go Intercity", 8);
Customer7.calculatePrice();
let Customer8 = new Uberprice("Sedan Intercity", 9);
Customer8.calculatePrice();
let Customer9 = new Uberprice("UberXL", 10);
Customer9.calculatePrice();
let Customer10 = new Uberprice("XL Intercity", 11);
Customer10.calculatePrice();

// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie {
  constructor(Title, Studio, Rating) {
    this.title = Title;
    this.studio = Studio;
    if (Rating === undefined) {
      this.rating = "PG";
    } else {
      this.rating = Rating;
    }
  }
  static getPG(x) {
    if (x.rating == "PG") {
      arr.push(x.title);
    }
  }
}
let movie1 = new Movie("Casino Royale", "Eon Productions", "PG-13");
let movie2 = new Movie("Interstellar", "Paramount Productions", "PG-13");
let movie3 = new Movie("Joker", "Warner Bros.", "R");
let movie4 = new Movie("Avatar", "20th Century Fox");
let movie5 = new Movie("Logan", "Village Roadshow Pictures", "R");
var arr = [];
let i = [movie1, movie2, movie3, movie4, movie5];
for (let x of i) {
  Movie.getPG(x);
}
console.log("Movies in the input array with a rating of PG");
console.log(arr);
console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);
console.log(movie5);
// Convert the UML diagram to Typescript class. - use number for double
class circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getarea() {
    console.log(
      `Area of a circle : ${Math.round(
        2 * Math.PI * Math.pow(this.radius, 2)
      )}sqcm`
    );
  }
  getcircumference() {
    console.log(
      `Area of a circumference : ${Math.round(2 * Math.PI * this.radius)}sqcm`
    );
  }
}
let area = new circle(2);
area.getarea();
let circumference = new circle(2);
circumference.getcircumference();
