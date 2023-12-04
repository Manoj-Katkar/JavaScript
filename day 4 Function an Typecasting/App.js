// ~Declaring the String in the differant ways 
let a = `string`;
console.log(typeof a);

let c = "100";
console.log(typeof c);

let d = 42;
console.log("100" + d);  // here the number will get converted in the String datatype and it will concatinate the two Strings

console.log(200 - "100"); // here the String will get converted to the number 

console.log("10" * 5); //here String will get converted into the number 

//~ if it is the  numeric String then only it will get converted into the number 

console.log(100/"10");

console.log(100/"str");  // here  it will not convert the String into the  number because it have characters in it


// ~now lets see the example for the equal to operator 
let num1 = 10;
let num2 = "10";

console.log(num1 == num2);  //~here it will check only data not a datatype 












// ~Explicit Type casting 

// let age = parseInt(prompt("Enter your age"));

console.log(typeof age);


// now I want to convert boolean into Number
// ~Number Conversion

let message = parseInt(confirm("Are you sure You want to continue !"));
console.log(message);    //Ans will be NaN

let str = "1024587452";
str = Number(str);
console.log(str);
console.log(typeof str);

// ~String Conversion
let salary = "10002458742";
// converting the number datatype into the String 

salary = String(salary);
console.log(salary);
console.log(typeof salary);


// ~Floating-Point Conversion:

let str1 = "2256.345";
// now I want to convert the above String data into  the Floating number 
let ans1 = parseFloat(str1);

console.log(typeof ans1);


// ~Boolean Conversion:
let num3 = 3;

let bool = Boolean(num3);
console.log(bool);   //~for 0 = it will print false and for 1 it will print true
console.log(typeof bool);


// ~Using the + Operator for Numeric Conversion:

let str3 = "12548579645";
// convert String to the number using the + nary operator
let ans3 = +str3;
console.log(ans3);
console.log(typeof ans3);


// console.log("hello");

// let num = "400";
// console.log(typeof num);
// let convertToNum = parseInt(num);
// console.log(typeof convertToNum);

// let x = 200;
// console.log(typeof typeof typeof x);  //if we will use more than one time typeof operator it will return the String Always




// ~Non Primitive Datatypes

// function add(a  , b){
//     if(a > b){
//         console.log(a + b);
//     }
//     else{
//         console.log(a - b);
//     }
// }

// add(200 , 1000 );

// ~function



// function demo(){
//     console.log("hello world 1");
//     console.log("hello world 2");
//     console.log("hello world 3");
//     console.log("hello world 4");
//     console.log("hello world 5");
//     console.log("hello world 6");
//     console.log("hello world 7");
// }

// demo();
// demo();

// function add(a , b){
//     if(a > b){
//         console.log(a - b);
//     }
//     else{
//         console.log(b - a);
//     }

//     console.log(a);
//     console.log(b);
// }

// add(100 , 200);




// function fun(x = 100 , y = 10000){
//     console.log(x , y);
// }

// fun("str");




