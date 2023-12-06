function sum(a = 20 , b = 50){
    return a+b;
}

let x = sum();
console.log(x);

//! Function With Expression

const y = function(a , b){
    console.log(a , b);
    console.log("I am function with Expression");
    return 10;
}

y(1n , true);

// !Arrow Function 

let ar = (a , b) =>{
    console.log(a , b);
    console.log("I am Arrow Function");
    return "string";
}

ar(10 , 20);

// ~different way we can use the Arrow function  without using the {curlly brackets}
let add = (d , e) =>console.log(d + e);
// console.log(add(20 , 30));

add(100 , 200);


// ~different way we can use the Arrow function  without using the (paranthesis)
// if I want to take the decision in one line 
let check = x => x > 10;
console.log(check(100));



// !"use strict"

let HOF = function(a , b){
    a();
    console.log(b);
    console.log("start");
}

HOF(function(){
    console.log("I am Anonymous Function");
});


//~ 7)IIFE (Immediate invoke function expression)   

(()=>{
    let x = 100;
    let y = 200;
    console.log(x , y);
    console.log("I am IIFE");
}
)();

c = 400;  //Uncough Referance error

console.log(c);





// ~Ananymous Function

// function(){
//     statements
// }



