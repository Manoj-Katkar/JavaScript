var a = 20;
let b = 755;
const num = 3.14;
console.log(a);
console.log(b);
console.log(num);
// console.log(d);  //not defined


// Now lets see the 
// ~Local Scope

function demo(a , b){
    console.log(a);
    console.log(b);
    let x = 100;
    var y = 300;
    const z = 200;
    console.log(x);
    console.log(y);
    console.log(z);
}

demo("val1" , "val2");

let w = "welcome";

{   
    // this is called as the block 
    let p = "hello";
    const num1 = 10;
    var num2 = 5874;   //this will get stored inside the global Scope 
    console.log(num1 , p);
    // ~if we will declare the var variable in the block that will get 
    // ~stored in the global Scope it will not stored in the block Scope 
}

console.log(num2); // I can Access it because it is stored in the Global Scope

// ~function return 

function sum(a , b){
    let ans = a + b;
    return ans;
}

let x = sum(10 , 20);
let y = sum(45 , 60);
console.log(x);
console.log(y);

// ~by default it will have return but it will not return anything 

function foo(){
    let num1 = 10;
    let num2 = 20;
    let ans = num2 - num1;
    console.log(ans);
}

let ans =  foo();
console.log(ans);

