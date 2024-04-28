//data-types
// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// let score = 100;
// let scoreValue = 100.3;
// let isLOggedIn = false;
// let outsideTemp = null;
// let userEmail = undefined;
// let id = Symbol('123');
// let anotherId = Symbol('12345');
// console.log(id === anotherId);

// let bigNumber = 7983499388n;
// console.log(typeof bigNumber);

// Reference (Non-Primitive)
// Array, Objects, Functions
// let webSeries = ["Mirzapur", "Ashram", "Raktanchal"]
// console.log(webSeries);

// let peronObj = {
    // name: "Chiranjeev",
    // age: 22
// }
// console.log(peronObj);

// let myFunction = function() {
//     console.log("Namaste Javascript");
// }

// myFunction(); 

/* 
two types of memory 
1. stack (used in primitive )
2.heap (used in non primitive )


*/

//memory allocation in javascript
// Stack(Primitive) Heap(Non-Primitive)

// let myName = "Chiranjeev";
// let fullName = myName;
// fullName = "Chiranjeev Kashyap";

// console.log(myName);
// console.log(fullName);

// let userOne = {
//     email: "usermail@gmail.com",
//     upi: "user@ybl"
// }

// let userTwo = userOne;

// userTwo.email = "chiranjeev@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);