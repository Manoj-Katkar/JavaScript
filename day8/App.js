let a = 500;

// !Closure

let ar =()=>{
    let a = 100;
    function boo(){
        let a = 900;
        console.log(a);
    }
    return boo;
}

ar()();

// console.log(x);
let x = 100;

// !variable hosting 

// console.log(y);
const y = 200;

console.log(z);

var z = 300;

// !function hosting

fun();
function fun(){
    console.log("I am Named Function");
}


// arr();     //!this will throw the error 
// let arr =()=>{
//     console.log("I am Arrow function ");
// }


// !Array 
// ~there are the three ways to declare the array in javascript 

// !first Literal way 
let array1 = [10 , 20 , 30 , 50 , 40];
console.log(typeof array1);

console.log(array1);

let num = 100;
let check = Array.isArray(array1);
console.log(check);

// !now creating the array of  the different datatypes is also possible in javascript 
let arr = [100 , true , 1n , ()=>"Arrow function" , [40 , 50] , undefined , null , {name:"sashi"}];

console.log(arr);

console.log(arr[1]);
console.log(arr[3]());
console.log(arr[4][1]);


// ~to check whether it is Array or not 
// Array.isArray(array1);



