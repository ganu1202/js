//primitve- 7types: String, Number, Boolean, Null, undefined, Symbol, BigInt

let outsideTemp=null
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

// const bigNumber=234567876543234567654
const bigNumber=234567876543234567654n //writing n at end makes it bigint


//non-primitive- Array, objects, functions

const heroes=["shaktiman","nagraj","doga"]
let myObj={
    name:"hitesh",
    age:22
}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
