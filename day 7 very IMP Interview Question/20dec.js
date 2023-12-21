console.log(document);

console.dir(document);

let b = document.body.children;
console.log(Array.isArray(b));
console.log(b);


let h1 = b[0];
//^ now I can give the css 
h1.sty