// ~Declaring the String in the differant ways 
let a = `string`;
console.log(typeof a);

let c = "100";
console.log(typeof c);

let d = 200;
console.log("100" + 200);  // here the number will get converted in the String datatype and it will concatinate the two Strings

console.log(200 - "100"); // here the String will get converted to the number 

console.log("10" * 5); //here String will get converted into the number 

//~ if it is the  numeric String then only it will get converted into the number 

console.log(100/"10");

console.log(100/"str");  // here  it will not convert the String into the  number because it have characters in it


// ~Explicit Type casting 

// let age = parseInt(prompt("Enter your age"));
// let ageRes = parseInt(age);
// console.log(typeof age);
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



function demo(){
    console.log("hello world 1");
    console.log("hello world 2");
    console.log("hello world 3");
    console.log("hello world 4");
    console.log("hello world 5");
    console.log("hello world 6");
    console.log("hello world 7");
}

demo();
demo();

function add(a , b){
    if(a > b){
        console.log(a - b);
    }
    else{
        console.log(b - a);
    }

    console.log(a);
    console.log(b);
}

add(100 , 200);




function fun(x = 100 , y = 10000){s
    console.log(x , y);
}

fun("str");




