console.log("Aditya Yadav")
console.warn("This is a warning message")
console.error("This is an error message")
let a

a = 10
let b = 20
console.log(typeof a)
console.log(typeof b)
let und;
let nul=null;
let bool=true;
console.log(typeof und)
console.log(typeof nul)
console.log(typeof bool)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
var x=10;
var x=15;
let y=20;
const z=30;
d=40;

function add(p,q){
    return p+q;
}
console.log(add(5,10));

//arrow function
const multiply=(p,q)=>p*q;
console.log( "arrow function",multiply(5,10));

let arr=[10,20,30,40];
console.log(arr[0]);
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(5);
console.log(arr);
arr.shift();
console.log(arr);

let obj={
    name:"Aditya",
    age:25,
    course:"B.Tech"
};
console.log(obj.name);
console.log(obj.age);
console.log(obj.course);

let today=new Date();
console.time("test");
for(let i=0;i<10000;i++){
    
}
console.timeEnd("test");

console.group("Group 1");
console.count("a");
console.count("a");
console.count("b");
console.count("a");
console.groupEnd();

//table
let students={name:"Aditya",age:20,course:"B.Tech"};
console.table(students);