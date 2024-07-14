// Day 2: Operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
let a = 30 ;
let b = 20 ;
console.log(`arithmetic operations value is ${a + b}` )
function addNumb (num1, num2){
    console.log(`addtion number ${num1} + ${num2} total value is ${num1 + num2}`)
};
addNumb(4,4);

// Task 2: Write a program to subtract two numbers and log the result to the console.

function subtractMain (num1, num2){
    console.log(`subtraction number ${num1} - ${num2} total value is ${num1 - num2}`)
};
subtractMain(10,5);

// Task 3: Write a program to multiply two numbers and log the result to the console.

function multiplyMain (num1, num2){
    console.log(`multiply number ${num1} * ${num2} total value is ${num1 * num2}`)
};
multiplyMain(10,5);

// Task 4: Write a program to divide two numbers and log the result to the console.

function divisionMain (num1, num2){
    console.log(`division number ${num1} / ${num2} total value is ${num1 / num2}`)
};
divisionMain(10,5);


// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

function findRemainder (divide , division){
    if(division === 0 ){
        console.log('zero is not allow')
        return
    }
    const remainder = divide % division;
    console.log(`The remainder when ${divide} is divided by ${division} then result is ${remainder}`)
}
findRemainder(10 , 3);
findRemainder(20 , 2);
findRemainder(5 , 0);
// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let c = 10;
c += 10 // c = c +10
console.log(c) 

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let d = 20
d -= 5 // d = d - 5
console.log(d)


// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

function compareNumber(num1 ,num2){
    if(num1 > num2){
        console.log(`${num1} is greater than ${num2}`);
    }else if (num1 < num2){
        console.log(`${num1} is less than ${num2}`);
    }else{
        console.log(`${num1} is equal to ${num2}`);
    }
}
compareNumber ( 5,4)
compareNumber ( 6,8)
compareNumber ( 4,4)

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

function compareSame(num1 , num2){
 if(num1 >= num2){
    if(num1 > num2){
        console.log(`${num1} greater than ${num2}`)
    }else if(num1 = num2){
        console.log(`${num1} is equal to ${num2}`)
    }
 }else{
    console.log(`${num1} is less than ${num2}`)
 }
}
compareSame(4,2)
compareSame(2,2)
compareSame(3,4)

function CompareMain(num1 , num2){
    if (num1 <= num2){
        if(num1 < num2){
            console.log(`${num1} is less than ${num2}`)
        }else if(num1 = num2){
            console.log(`${num1} equal to ${num2}`)
        }
    }else{
        console.log(`${num1} is greater than ${num2}`)
    }
}
CompareMain ( 10 , 20)
CompareMain ( 20 , 10)
CompareMain ( 10 , 10)

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
function compareEquval (num1, num2){
    if(num1 === num2){
        console.log('both value and same Data type')
    }else if (num1 == num2){
        console.log('only value is same')
    }else{
        console.log('Both value and data type are different');
    }
}
compareEquval(2,2);
compareEquval(2,"2");
compareEquval(3,5);

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
function combineMain (val1, val2){
    if(val1 > val2  && val1 < 10 ){
        console.log(`${val1} is greater than ${val2} and ${val1} is smaller than 10`)
    }else{
        console.log('hi how are you')
    }
}
combineMain(5, 3);
combineMain(15, 4)
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

function combineOr(num1 ,num2){
    if((num1 == num2) || (num1 > 10)){
        console.log(`one codition or both condition true`)
    }else{
        console.log('both condition false')
    }
} 
combineOr( 5 , 5)
combineOr( 10 , 5)
combineOr( 11 , 5)

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let vl = 3
if (vl != 5){
    console.log('condition is true')
}

function notOperator(val){
    if(!val){
        console.log(`The value is falsy: ${val}`)
    }else{
        console.log(`The value is truthy: ${val}`)
    }
}
notOperator(true);
notOperator(false);
notOperator(0);
notOperator(1);
notOperator(undefined);
notOperator(NaN);
notOperator(0n);
notOperator('nirmal');
notOperator('0');
notOperator('false');

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
function ternaryMain (val){
  val >= 0 ? console.log('value is positive') :  console.log('value is negative');
}
ternaryMain(5)
ternaryMain(0)
ternaryMain(1)
ternaryMain(-1)

// Feature Request:
// Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
// Achievement:
// By the end of these activities, students will:

// Understand and use arithmetic operators to perform basic calculations.
// Use assignment operators to modify variable values.
// Compare values using comparison operators.
// Combine conditions using logical operators.
// Use the ternary operator for concise conditional expressions.