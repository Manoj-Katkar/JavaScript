let obj={
    name:"sachin",
    id:120
}

let res = Object.freeze(obj);
console.log(res);
obj.skills = ["java" , "javascript"];

delete obj.id;
obj.name = "virat";
console.log(obj);

let emp={
    name : "sashi",
    id:96,
    skills : ["js" , "node" , "react"]
}

Object.seal(emp);
emp.id = 400;

emp.address={
    door:200,
    area:"Thane",
    state : "Maharashtra"
}

delete emp.name;
console.log(emp);

let res1 = Object.isSealed(emp);
console.log(res1);

let key = Object.keys(emp);
console.log(key);

let v = Object.values(emp);
console.log(v);

let e = Object.entries(emp);
console.log(e);


// !Date(); Object 

let x = new Date();
console.log(x);

let date1 = x.getDate();
console.log(date1);


console.log(x.getFullYear());
console.log(x.getDay());

console.log(x.getHours());
console.log(x.getMonth());
console.log(x.getSeconds());
console.log(x.getMiliseconds());


let y = new Date("2000-12-12");

y.setFullYear(2000);
y.setDate(12);
y.setMonth(11);
console.log(y);

// !Math

let res2 = Math.round(1.5);
console.log(res2);


console.log(Math.round(-1.5));
console.log(Math.floor(-2.3));
console.log(Math.floor(11.9));

console.log(Math.ceil(1.0000001));
console.log(Math.ceil(-2.5));

console.log(Math.floor(11.9));
