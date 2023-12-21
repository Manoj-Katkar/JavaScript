// let h1 = document.getElementsByTagName("h1");
console.log(h1);


let all = document.getElementsByTagName("*");
console.log(all);


const h = document.getElementById("head");
console.log(h);

// !document.querySelector()

let div = document.querySelector(".container");
console.log(div);


let x = document.querySelector("#head");
x.style.background = "hotpink";

x.className = "heading_class";

let a = document.querySelector("a");
console.log(a);


let link = document.querySelectorAll(".link");

let ar = Array.from(link);
console.log(ar);

// !HOw to create the different elements in javascript 

let d = document.getElementsByTagName("div")[0];

d.id = "container";

let h1 = document.createElement("h1");
let h2 = document.createElement("h2");

h2.innerHTML = "heading tag 2";
h1.innerHTML = "heading tag";

d.appendChild(h1);
d.append(h1 , h2);

d.innerText = "<h1>hello world</h1>";
d.innerHTML = `<h1 id= "heading" >hello world</h1>`;


// !SetAttribute()

let div1 = document.querySelector("div");
console.log(div1);

div1.innerHTML = "<h1>heading</h1>";

div.setAttribute("id","container");
div.setAttribute("class","demo");

div.setAttribute("style","color:hotpink;");
div.setAttribute("title","Popup text");


let username = document.getElementById("username");
let password = document.querySelector("#password");

username.setAttribute("required" , "");
username.setAttribute("required" , "");


