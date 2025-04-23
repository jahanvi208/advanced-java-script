//map holds the key value pair where key can be of any datatype

//create a map
const fruits = new Map([
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);
console.log(fruits);

//the set() method

// const fruits= new Map();
// fruits.set("apples",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);

//the get() method

fruits.set("apples",200);
fruits.get("apples");
console.log(fruits);

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

let text="";
for (const x of fruits.values()){
    text += x;
}
console.log(text);