//const,let,var variables
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
 // console.log(value);
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
//console.log(numbers2);
let numbers= [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
//console.log(sum)
const d=new Date();
console.log(d);
const cars=["audi","bmw","benz","swift"];
let i = 0;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
//console.log(text);
let firstName = "";
let lastName = "";
let price = 0;
const myArray = [];
const myObject = {};
let a=4;
const b=6;
a=6;
//b=8; // it throws error bcz const cant be reassigned
console.log(a);
console.log(b+1);

let rollNumber=3;
console.log(typeof(rollNumber));
let name="Ram";
console.log(typeof(name));
console.log(typeof(Num));
const isDeveloper=true;
console.log(typeof(isDeveloper));
console.log(typeof(null))
let per={
    name:'ram',
    age:10
}
console.log(typeof(per));
const Diversity=["animals","humans","air","water","forest"];
console.log(typeof(Diversity));
 
  
let person={
    name:'ram',
    age:10
}
console.log(person.name);
console.log(person["age"]); 
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
console.log(user) ;

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
 