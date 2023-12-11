let a = 500;

// !Closure

// let ar =()=>{
//     let a = 100;
//     function boo(){
//         let a = 900;
//         console.log(a);
//     }
//     return boo;
// }

// ar()();

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
// let array1 = [10 , 20 , 30 , 50 , 40];
// console.log(typeof array1);

// console.log(array1);

// let num = 100;
// let check = Array.isArray(array1);
// console.log(check);

// !now creating the array of  the different datatypes is also possible in javascript 
// let arr = [100 , true , 1n , ()=>"Arrow function" , [40 , 50] , undefined , null , {name:"sashi"}];

// console.log(arr);

// console.log(arr[1]);
// console.log(arr[3]());
// console.log(arr[4][1]);


// ~to check whether it is Array or not 
// Array.isArray(array1);

//~ first using the literal way 

// var brr = [10 , 20 , 30 , 40 , ()=>"arrow function" ,"string" , [10 , 20]];

// console.log(brr.length);
// console.log(brr[4]());
// console.log(brr);

// ar[4]= "string";
// console.log(brr);

// ar[6] = "last array element";

// !using the array constructor

// let brr = new Array(5);  //this will be treated as the length

// let Brr = new Array(10 , 50 , 78 , 50); //it will treat as the Array elements 

// brr[0] = 40 ;
// brr[2] = 87;


// console.log(brr);


// !using the Array.of();

// ~it will only take the values as the Array element only 


// let x1 = Array.of(10 , 50 , 78 , 98);
// console.log(x1)





//         !DATE : 11/12/2023        //
// ~Array methods to itearate over it to get the array element , array index , or the part of the array when the particular condition is true 

// 
let ar = ["javascript" , 10 , 1n , true , null , [10 , 20 , 30 , 50]];

console.log(ar.length);

for(let i = 0 ; i <= ar.length - 1 ; i++){
    console.log(ar[i]);
}

// !find() method:

let Arr = [10 , 20 ,30 ,40 ,50];
let findRes = ar.find((v , i , ar) => {
    console.log(v);
    return v>30;
})

console.log(findRes);

// !findIndex() method:

let findResIndex = ar.findIndex((v , i , ar) => {
    console.log(v);
    return v>100;
})

console.log(findResIndex);


// !filter() method:


let filterRes = ar.filter(function(m , i){
    return m > 20;
})

console.log(filterRes)











