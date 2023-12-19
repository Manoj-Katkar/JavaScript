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

// !date :15/12/23

let v = 100;

// &object creation using the class

class Student{
    //!create the constructor 
    constructor(name , id , percentage){
        this.name = name;
        this.id = id;
        this.percentage = percentage;

    }
}

let s1 = new Student("sachin" , 100 , 98);
let s2 = new Student("dhoni" , 7 , 100);

console.log(s1.name);
console.log(s2, percentage);


s2.skills = ["js" , "java"];

console.log(s2);

// !constructor function

function Employee(name , id , designation){
    this.eName = name;
    this.eId = id;
    this.eDesignation = designation;
}

let e1 = new Employee("virat",150,"manager");
console.log(e1);

// & by invoking the Object Constructor

let obj1 = new Object({name:"sashi" , id :457});
obj1.name = "sashi";
obj1.id = 457;

console.log(obj1);


// "use strict";

a = 100;
console.log(a);

function demo(a , b , b){
    console.log(a+b+b);
}
demo(10,20,30);

let arguments = 100;
console.log(arguments);


// !This keyword in javsaScript:

console.log(this === window);

function demo(){
    console.log(this);
    let ar =()=>{
        console.log(this);
    }
    ar();
}

demo();





