let score="33abc" 
console.log(typeof(score))
let valueInNum= Number(score)
console.log(typeof valueInNum);
console.log(valueInNum);

//NaN is also a number
let sc1=null
console.log(typeof(sc1))
let valueInNum2= Number(sc1)
console.log(typeof valueInNum2);
console.log(valueInNum2);

console.log("")
let sc2=undefined
console.log(typeof(sc2))
let valueInNum3= Number(sc2)
console.log(typeof valueInNum3);
console.log(valueInNum3);



//"33"=>33
//"33abc"=>NaN (type=>number)
//""=> false, 1=>true, 0=>false
//"hitesh"=> true

let someNumber=33
let stringNum=String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);
