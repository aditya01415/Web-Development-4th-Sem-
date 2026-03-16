let user={
    name:"John",
    age:30,
    address:{
        city:"New York",
        country:"USA"
    }
};
let usercopy={...user};
usercopy.address.city="Mumbai";
console.log(user);
console.log(usercopy);