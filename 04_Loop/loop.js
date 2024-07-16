
// for loop
// Write a programm to print numbers from 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(`number is ${i} and ${Math.floor((Math.random() * 10) + 1)}`)
}

//write a program to print multiplication table of 5 using for loop

for (let i = 5; i < 6; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

const number = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// while loop
//sum of  number 1 to 10 using while loop
// sum = 0 + 1
// sum = 1 + 2
// sum = 3 + 3
// sum = 6 + 4
// sum = 10 + 5
// sum = 15 + 6
// sum = 21 + 7
// sum = 28 + 8
// sum = 36 + 9
// sum = 45 + 10 
// sum = 55
let n = 1;
let sum = 0;

while (n <= 10) {
    sum = sum + n;
    n++
}

console.log(`The sum of numbers from 1 to 10 is ${sum}`);

//print number from 10 to 1 using while loop

let i = 10;
while (i >= 1) {
    console.log(`${i}`)
    i--
}

//print number from 1 to 5 using do while loop

let j = 1;
do {
    console.log(`number is ${j}`)
    j++
} while (j <= 5)

//calculate the facorial number using do while loop

// 4 * 3 * 2 * 1

function factorialNumb(n) {
    let result = 1;

    do {
        result = result * n;
        n--;
    } while (n > 0);
    return result;
}

const facorial = factorialNumb(5)

console.log(facorial)

//write a program to print a pattern using  nested for loops

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

let pattern = '';

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    pattern += row + '\n';
}

console.log(pattern);

// print number from 1 to 10 but skip number 5 using continue statements

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        continue;
    }
    console.log(i);
}

// print number from 1 to 10 but stop the loop when number is 7.
for (let i = 1; i <= 10; i++) {
    if(i == 7){
        break;
    }
    console.log(i);
}