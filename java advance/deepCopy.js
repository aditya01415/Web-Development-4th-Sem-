let user={
    name:"John",
    age:30,
    address:{
        city:"New York",
        country:"USA"
    }
};
let usercopy=JSON.parse(JSON.stringify(user));
usercopy.address.city="Mumbai";
console.log(user);
console.log(usercopy);