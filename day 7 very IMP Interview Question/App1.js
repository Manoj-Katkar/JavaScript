// !constructor function

function Employee(name , id , designation){
    this.eName = name;
    this.eId = id;
    this.eDesignation = designation;
}

let e1 = new Employee("virat",150,"manager");
// console.log(e1);


// let arr = [1, 2, 3, 4, 5];

// for (let index in arr) {
//     console.log(arr[index]);
// }


let arr = [1, 2, 3, 4, 5];

let mappedArray = arr.map(function (element) {
    return element * 2;
});

console.log(mappedArray);
console.log(arr);


// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (element , index , arr) {
//     console.log(element*10);
// });
// console.log(arr);
