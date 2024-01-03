let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener('click' , function(e){
    console.log(e);
    let section = document.querySelector(".demo");
    let t = section.classList.toggle("active");
    console.log(section);
    console.log(t);

    if(t === true){
        section.style.visibility = "hidden";
        this.innerHTML = "SHOW";
        e.target.innerHTML = "SHOW";
        btn.innerHTML = "SHOW";
    }
    else{
        section.style.visibility = "visible";
        this.innerHTML = "HIDE";
        e.target.innerHTML = "HIDE";
        btn.innerHTML = "HIDE"; 
    }
    
})


// *IN object we can able to define the one function in 4 ways

let obj = {
    name : "virat",
    id : 100,
    nf:function(){
        console.log(this);

        function demo(){
            console.log(this)
        }
        demo();

        let aff =()=>{
            console.log(this);
        }
        aff();
    },

    af:()=>{
        console.log(this);
    }
}

obj.nf();
obj.af();




