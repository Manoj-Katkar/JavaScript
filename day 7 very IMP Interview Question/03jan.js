// !rest-parameter:

function demo(a , b ,...z){
    // console.log(a , b);
    console.log(z);
    console.log(...z);
    console.log("this is demo function");
}

demo(100 , 200 , 300 , 400 , 500 , 600 , 700);



// !Spread operator:

let ar = [30,40,50];
console.log(ar);
console.log(...ar);



let str = "JavaScript";
console.log([...str]);


let n = 100;
console.log(...n);

let obj1={
    name: "sachin",id : 100
}

console.log(...obj1);



// !Object destructuring : 

let obj={
    name1: "sachin",
    id:123,
    perc:100,
    skills:["js" , "node"]
}

console.log(obj.id);

const{id , perc,name1,n1} = obj;

console.log(id);
console.log(perc);
console.log(name1);
console.log(n1);

let std = {
    name1: "virat",
    id:18,
    perc:97,
    skills:["express" , "sql"]
}


// const {skills :languages,perc,..N}
console.log(languages);
console.log(x);

console.log(std.languages);


let{...copiedObj} = std;
console.log(copiedObj);
console.log(copiedObj===std);

let ad={
    pinCode : 627751
}



let mergeObj={...ad,...std}
console.log(mergeObj);