let arr=[1,2,3];
let arrcopy=[...arr];
arrcopy[0]=10;
console.log(arr);
console.log(arrcopy);

let user=[
    {
        name:"John",
      
    },
    {
        name:"Alice",
    }
];

let usercopy=[...user];
usercopy[0].name="Bob";
console.log(user);
console.log(usercopy);