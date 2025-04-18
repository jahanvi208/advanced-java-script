// // class ClassName {
// //     constructor(prop1,prop2) {
// //         this.prop1=prop2;
// //         this.prop2=prop1;
// //     }
// // }
// // let obj=new ClassName("arg1","arg2");
// // console.log(obj.prop1);
// // console.log(obj.prop2);
// class Dog {
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog= new Dog("javaScript",2.4,"brown","chihuahua");
// console.log(dog);
// class

//there can only be one constructor in the class

// class Person {
//     constructor(firstname,lastname){
//          this.firstname = firstname;
//          this.lastname = lastname;
//     }
//     greet() {
//         console.log("hi there i am", this.firstname);
//     }
//     compliment(name,object){
//         return "thts a wonderful" + object + "," + name;
//     }
// }

// let p = new Person("jahanvi","pratap");
// console.log("hi",p.firstname);
// let compliment = p.compliment("harry","hat");
// console.log(compliment);
// //Methods : the function on a class. when defining these mthods we dont use the function keyword.we diesctly starts with name.

//this refers to the current calling object

//constructor- to initialize the object.
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//    }
// }
// let p = new Person("maria","saga");
// console.log(p.firstname);

// constructor(firstname,lastname) {
//     if(firstname.startsWith("M")){
//         this.#firstname=firstname;
//     } else {
//         this.#firstname = lastname;
//     }
// }
// let p = new Person("kay","moon");
    
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname = firstname;
//     }
//     get lastname(){
//         return this.#lastname;

//     }
//     set lastname(lastname){
//         this.#lastname = lastname;
//     }

// }
// let p = new Person("jazz","buzz");
// console.log(p.firstname);

// class Vehicle {
//     constructor(color, currentspeed, maxspeed ){
//         this.color = color;
//         this.currentspeed = currentspeed;
//         this.maxspeed = maxspeed;

//     }

//     move() {
//         console.log("moving at",this.currentspeed);

//     }
//     accelerate(amount){
//         this.currentspeed += amount;
//     }
// }

// class motorcycle extends Vehicle{
    // constructor(color, currentspeed, maxspeed, fuel){
    //     super(color, currentspeed, maxspeed, fuel);
    //     this.fuel = fuel;
    // }
//     doWheelie(){
//         console.log("driving on one wheel!");
//     }

// }
// let motor = new motorcycle("black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

//we cannot access the motorcyle specific properties or methods in our vehicle class.this is because not all bheicles

// prototypes is the mechanism in js that makes it possible to have objects. when nothing is specified when creating a class, the object inherit from the object.

class Person {
    constructor(firstname,lastname){
         this.firstname = firstname;
         this.lastname = lastname;
    }
    greet() {
        console.log("hi there i am");
    }
}
Person.prototype.introduce = function(){
    console.log("hi there  i am ", this.firstname);
};
Person.prototype.favoriteColor = 'green';

let p = new Person("jahanvi","pratap");
console.log(p.favoriteColor);
p.introduce();