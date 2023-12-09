// !Ananoymous function 


// var add = function(a, b) {
//     return a + b;
// };

// console.log(add(10 , 50)); 

// var myFunction = function() {
//     console.log("This is an anonymous function.");
//   };
  
//   // You can then call the function using its variable name
//   myFunction();


// !Lets Learn The Higher Order Functions 

// ~ the function which takes the function as an argument is known as t he higher order function
// call back function


function x(){
    console.log("Hi I am Call Back Function");
}

// Higher order function

function y(x){
    //  return x();
    x();
}

y(x);


//~ 7)IIFE (Immediate invoke function expression)   

(function printName(){
        console.log("Hi there I am Manoj Katkar Enjoying the learning the function ");
        // now I have to call this function immediatelly 
})();
