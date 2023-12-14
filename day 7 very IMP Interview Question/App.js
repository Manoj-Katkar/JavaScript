console.log(window);

window.alert("I am Alert method");

console.log(this)

let y = 200;
const z = 500;
var x = 900;

console.log(x , y , z);


function demo(){
    var a = 100;
    console.log(this.a);
}

demo();

// ~ Closure 
var x = 200;
console.log(x);

// ! Nested Functions 

function outer(){
    let x = 100;
    console.log(x);

    let demo = "outer variable ";

    function InnerFun(){
        console.log(demo);
        let str = "javascript";
        let c = 100;
        console.log(str , c);
    }

    InnerFun();
    return 10;
}

outer();
let p = 500;
console.log(p);


// !Date : 14/12/23

let str = "Hello World";
console.log(str.length);
console.log(str.charAt(7));
console.log(str.charCodeAt(4));


const str1 = "welcome";
const convertToAr = str1.split("");
console.log(convertToAr);

const reverseAr = convertToAr.reverse();
console.log(reverseAr);

const JoinAr = reverseAr.join("");
console.log(JoinAr);


// ~reverse the string

console.log(str1.split("").reverse().join(""));



