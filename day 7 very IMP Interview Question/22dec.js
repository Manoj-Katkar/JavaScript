let img = document.querySelector("#image1");
console.log(img);


let height = img.getAttribute("height");
console.log(height);


let classNameTag = img.getAttribute("class");
console.log(classNameTag);

// todo 
img.removeAttribute("alt");

let check = img.hasAttribute("src");
console.log(check);


// ^DOM Event
let div = document.querySelector(".container");
console.log(div);


div.onclick=(e)=>{
    console.log(e);
    div.style.background = "hotpink";
}


div.addEventListener('click' , function(e){
    console.log(e);
    div.style.background = "chocolate";
})

let section = document.getElementById("demo");
console.log(section);


// &Events pic is there in the mobile refer to that with the date 

let div = document.get

div.className = "container";
div.className = "hello";


div.setAttribute("class" , "div")




