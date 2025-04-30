//call back
// function dosomething(callback) {
//     callback();
// }
// function sayshi(){
//     console.log("hi");
// }
// dosomething(sayshi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("you got an",grade,":amazing");
//             break;
//         case grade == "B":
//             console.log("you got an",grade,":well done");
//             break;   
//         case grade == "C":
//             console.log("you got an",grade,":alright");
//             break;
//         case grade == "D":
//             console.log("you got an",grade,":hmm....");
//             break;
//         default:
//             console.group("an",grade,"What?!");    
//     }

// }

// function getGrade(score, callback) {
//     let grade;
//     switch(true){
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade="F"

//     }
//     callback(grade)
// }
// getGrade(85,judge);

//promises: these func needs two parameters, and both paran=meters are call back. we hv called them resolve and reject.
//when resolve() is promise 

// let promise = new Promise(function(resolve,reject){
//     let x =20;
//     if(x>10){
//         resolve(x);
//     }else{
//         reject("too low");
//     }

// });

// promise.then(
//     function(value){
//         console.log("success",value);
//     },
//     function(error){
//         console.log("error:",error);
//     }
// );

// const promise = new Promise((resolve,reject)=>{
//     // resolve("success");
//     reject("fool");
// })
// .then(value =>{
//     console.log(value);
//     return"we";
// })
// .then(value =>{
//     console.log(value);
//     return"can";
// })
// .then(value =>{
//     console.log(value);
//     return"chain";
// })
// .then(value =>{
//     console.log(value);
//     return"promises";
// })
// .then(value =>{
//     console.log(value);
    
// })
// .catch(value =>{
//     console.log(value);
    
// })

