// !Objecrts Inbuilt Methods 

// ~Object.freeze()

const obj ={
    name : "Manoj",
    id : 20,
    station : "Thane"

}

// now I want to freez the object 
// Object.freeze(obj);                             //*Now I cannot add , delete , update the any key or value 

// obj.lastName = "Katkar";
// obj.name = "Hello-Name-NotChanged";

// delete obj.id;

// console.log(obj);


// console.log(Object.isFrozen(obj));
 
// Object.seal(obj);      //*Now I can only able to update the values of the keys , but not able to delete or add the new key             


// obj.lastName = "Katkar";
// obj.name = "Hello-Name-NotChanged";

// delete obj.id;


// console.log(obj);
// console.log(Object.isSealed(obj));


// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// !Date(); Object 

let x = new Date();
console.log(x);

console.log(Math.ceil(-3.4));

console.log(Math.floor(-7.6));

console.log(Math.floor(-13.87));


console.log(Math.trunc(-13.87));