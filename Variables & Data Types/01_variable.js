// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numb = 43
console.log(numb);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str = 'javaScript with Hitesh sir'
console.log(str)

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const score = true 
console.log(score);

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numbType = 43 ;
let strType = 'Thank you Hitesh sir. you are best teacher';
let scoreMain = false;
const myDetails = {
    name : 'nirmal',
    language:'javaScript',
    web :'nirmal-patel-bio.netlify.app',
    myPortfolio: function(){
        console.log(`${this.name} personl web is ${this.web}`)
    }
};
const arr = ['hitesh sir' , 'code with chai' , 'javaScript'];

console.log(typeof numbType);
console.log(typeof strType);
console.log(typeof scoreMain);
console.log(typeof myDetails);
console.log(typeof arr);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let a= 73
console.log(`initial value ${a}`);
a = 43
console.log(`New value ${a}`);

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const valueMain = 'javaScript'
valueMain = 'React js' 

console.log(valueMain)