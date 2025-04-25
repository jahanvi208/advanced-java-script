//map holds the key value pair where key can be of any datatype

//create a map
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// console.log(fruits);

//the set() method

// const fruits= new Map();
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);

//the get() method

// fruits.set("apples",200);
// fruits.get("apples");
// console.log(fruits);

//difference between jsobjects and maps
//obj; iterable, no size prop, keys must be str, keys are not well ordered. hv default keys.
//maps: not iterable, hv size prop, keys can be of any data type, well ordered, no default keys.

// console.log(fruits.size);
// fruits.delete("apples");
// console.log(fruits);
// fruits.clear();
// console.log(fruits);

// console.log(fruits.has("apples"));

// let text="";
// fruits.forEach(function(value,key){
//     text += key + '=' + value;
// })
// console.log(text);

// let text="";
// for (const x of fruits.entries()){
//     text += x;
// }
// console.log(text);

// let text="";
// for (const x of fruits.keys()){
//     text += x;
// }
// console.log(text);

// let text="";
// for (const x of fruits.values()){
//     text += x;
// }
// console.log(text);

//sum of all values
// let total= 0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

// const apples = {name:'apples'};
// const bananas = {name:'bananas'};
// const oranges = {name:'oranges'};
// const fruits =new Map();
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,300);
// console.log(fruits);
// console.log(fruits.get("apple"));

//array

// const fruits = [
//     {name:"apples",quantity:300},
//     {name:"banana",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];


// function myCallback({quantity}){
//     return quantity > 200 ? "ok" : "low";
// }
// const result = Map.groupBy(fruits,myCallback);
// console.log(result);

// const person={
//     firstname: "john",
//     lastname: "doe",
//     age:50

// };

// let{lastname:name}=person;
// console.log(person);

// const fruits = ["bananas","oranges","apples","mangoes"];
// let[fruit1,fruit2]=fruits;
// console.log(fruits);

// let[fruit1,,,fruit2]=fruits;
// let{[0]:fruit1,[3]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);

// const numbers= [10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers
// console.log(a);
// console.log(b);
// console.log(rest);

// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

// let text = "";
// for (const[key,value]of fruits){
//     text += key + "is" + value;
// }
// console.log(text);

// let x=5;
// let z = Math.pow(x,2);
// console.log(z);

// const fruits = ["bananas","oranges","apples","mango"];
// console.log(fruits.includes("mango"));

//include method is case sensitive

//trailing commas are legal in array literals
// const arr = [
//     "one",
//     "two",
//     "three",,
// ];

// const sparsearray = [1,,,4,5,,];
// console.log(sparsearray);
// console.log(arr.length);

// const person =  {
//     firstname : "john",
//     ,
//     age : 30,

// }
// console.log(person);
