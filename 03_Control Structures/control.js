// Tasks/Activities:

// Activity 1: If-Else Statements

//     Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function valCheck (num = 0){
    if(num > 0){
        console.log(`${num} is positive value`)
    }else if(num < 0){
        console.log(`${num} is negative value`)
    }else{
        console.log(`value is ${num} `)
    }
}

valCheck();
valCheck(10);
valCheck(-10);

//     Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function eligibleAge(age){
    if(age >= 18){
        console.log('person is eligible');
    } else {
        console.log('not eligible')
    }
}
eligibleAge (18)
eligibleAge (17)

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.


function findLargest ( a, b ,c){
let largest
    if(a >= b){
        if( a >=c){
            largest = a
        }else {
            largest = c
        }
    }else{
        if(b >= c){
            largest = b
        }else {
            largest = c
        }
    }
  return largest
}

let largestVal = findLargest ( 10, 5 , 25);
console.log(`largest value is ${largestVal}`);

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    function dayMain ( days){
        switch(days){
            case 1: console.log('monday');
            break;
            case 2: console.log('tuesday')
            break;
            case 3: console.log('wednesday')
            break;
            case 4: console.log('thusday')
            break;
            case 5: console.log('friday')
            break;
            case 6: console.log('saturday')
            break;
            case 7: console.log('sunday')
            break;
            default:  console.log("Invalid day number. Please enter a number between 1 and 7.");
    } 

}
dayMain(1)
dayMain(5)
dayMain(7)
dayMain(9)

//     Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

function gradeSystem (score){
    let grade
    switch(true){
        case( score >= 90 && score <= 100): grade = 'A'
        break ;
        case (score >= 80 && score < 90) : grade = 'B'
        break ;
        case ( score >= 70 && score < 80) : grade = 'C'
        break ;
        case ( score >=60 && score < 70) : grade = 'D'
        break ;
        case ( score >=0 && score < 60) : grade = 'F'
        break ;
        default:
            grade = 'Invalid score';
    }
    return grade
}
let result = gradeSystem (0)

console.log(result)

// Activity 4: Conditional (Ternary) Operator

//     Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function evenOdd(numb){
    (numb % 2 === 0) ? console.log('value is even') : console.log('value is odd')
}
evenOdd(3);
evenOdd(4);
evenOdd(17);

// Activity 5: Combining Conditions

//     Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function isLeapYear(year){
   if((year % 4 === 0 && year % 100 !== 0 ) || (year %400 ===0)){
     console.log(`${year} is a leap year.`);
   }else{
    console.log(`${year} is not a leap year.`);
   }

}
isLeapYear(2024)
isLeapYear(2025)
isLeapYear(2020)
// Feature Request:

//     Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
//     Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
//     Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
//     Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
//     Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:

// By the end of these activities, students will:

//     Implement and understand basic if-else control flow.
//     Use nested if-else statements to handle multiple conditions.
//     Utilize switch cases for control flow based on specific values.
//     Apply the ternary operator for concise condition checking.
//     Combine multiple conditions to solve more complex problems.
