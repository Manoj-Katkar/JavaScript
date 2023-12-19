// console.log(Math.random() * (99999 - 10000) + 10000);

// let num = Math.random() * (99999 - 10000) + 10000;
// console.log(Math.trunc(num));

// console.log(Math.pow(2,3));
// console.log(2**3);

// console.log(Math.cbrt(27));

// console.log(Math.max(true , false));
// console.log(Math.max("12","25","78","7896"));   //^for the numeric Strings it will work 

// console.log(Math.min(true , false));


let cd = function(){
    document.write("welcome all");
}
window.setTimeout(cd , 5000);

window.setInterval(cd , 2000);

let cb = function(){
    document.write("welcome all");
}

let y = window.setTimeout(cb , 5000);
console.log(y);

let z = window.setInterval(()=>{
    document.writeln("I am Set interval function " + "</br>");
} , 2000);

console.log(z);
