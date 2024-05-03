
// function saymyname (){
//     console.log("a");
//     console.log("b");
//     console.log("c");
//     console.log("d");    
// }

// saymyname()

// function addtwonum(num1 , num2){
//     // let result = num1 + num2
//     // console.log("abhi");
//     // return result  
//     return  num1+num2
// }
// const result = addtwonum(14,"24")

// console.log("Result = " , result);

// function loginusermsg (username){
//     return `${username} just logged in`
// }
// // const user = loginusermsg("abhi")

// //  console.log(user);

// console.log(loginusermsg("abhi"));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,600));

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));