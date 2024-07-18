// const onj = [
//     {
//         name: 'nirmal',
//         age: 30
//     },
//     {
//         name: 'jhone',
//         age:28,
//     },
//     {
//         name : 'hiren',
//         age:30
//     }

// ]

// const Myobj = Map.groupBy(onj, (onj) => onj.age )

// console.log(Myobj)

// console.log(a)

let a = b =5



// console.log(a); // undefined, because `a` is declared but not initialized yet
// var a;
// console.log(b); // ReferenceError: b is not defined
// var b;


// const arr = ['z' , 'a' , 'd' , 'l' , 5, 1, 8, 0 ];

// let swap;

// for(i= 0 ; i< arr.length ; i++){
//     for(j= i ; j< arr.length ; j++){
//         if(arr[i] > arr[j]){
//             swap = arr[i]
//             arr[i] = arr[j]
//             arr[j] = swap
//         }
//     }
// }

// console.log(arr)

// 1) given a string , reverse each word  in the sentence

let str = "hi kese ho"

let saveStrArry = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})

let relulStr = saveStrArry.join(" ");

// console.log(relulStr)

// 2) check is array or not

function checkArray(elem){
    return Array.isArray(elem)
}

// console.log(checkArray([]));

//3) How to empty an array in javaScript ? oo not reset and loop

let arrr =[1,2,3,4,5,6]

arrr.length = 0

// console.log(arrr)

// 4) how would you check if a number is integer( % )

function checkInt(val){
    return Number.isInteger(val)
}
let valRsult = checkInt(2.5);

function checkMainInt(val){
    if(val % 1 === 0){
        console.log('this is integer value')
    }else{
        console.log('not interger')
    }
}
let va2Result = checkMainInt(2)

console.log(va2Result);
// console.log(valRsult)

// 5) make this Work duplicate ([1,2,3,4,5,6])

let arr4 =[1,2,3,4,5,6]

function dupliVal (val){
    return val.concat(val)
}

let dpli = dupliVal(arr4)

// console.log(dpli)


// function

// 6) write a js function that reverse a number

function reverKaro(val){
    return Number(val.toString().split("").reverse().join(""))
}
let reverResult = reverKaro(123);

// console.log(reverResult)

function reverseNumb(numb){
    let reverMth = 0 
    while(numb > 0){
        rem = numb % 10 
        reverMth = reverMth* 10 + rem
        numb = Math.floor(numb/10)
    }
    return reverMth
}

// console.log(reverseNumb(123456789));

// 7) write a function palindrome or not (lool , peep)

function stringPalChecker(str){
    let reverseMain =str.split("").reverse().join("")
    if(reverseMain === str){
        return "palindrome sting"
    }else{
        return "not"
    }
}

// console.log(stringPalChecker('poops'));

function palCheck(str){
    let rev = str.split("").reverse().join("")
    return rev === str ? "string is palindrome" : "not"
}

resultPel = palCheck("poty")
// console.log(resultPel)

// 8) write a javascript function that return a passed string with letter in alphabetical order

str ='fdreasb'

function stringOrder(str){
    let result = str.split("").sort().join("")
    return result
}

// console.log(stringOrder(str));


// 9) write a javascript function that accets a string as a parameter and converts the frist letter of each word of string in upper case

let str2 = "bhai kese ho"

function fristCapword(str2){
   let caps = str2.split(" ").map(function(word){
        return word.charAt(0).toString() + word.substring(1)
    })
    return caps.join(" ")
}
// console.log(fristCapword(str2));

// 11) write a javascript function to get the number of occurences of each letter in specified string 

function letterCount(str){
    let occ={}
    str.split("").forEach(function(word){
        if(occ.hasOwnProperty(word) === false){
             occ[word] = 1
        }else{
            occ[word]++
        }
    })
    return occ
}
// console.log(letterCount("pooja"))

// 12)loop an array and add member of instanceof;
const arr5 = [1,2,3,4]

function calSum(arr5){
    let sum = 0
    arr5.forEach(function(elem){
        sum = sum + elem
    })
    return sum
}
// console.log(calSum(arr5))


//13 in an array of number and string ,only add those which are not string

const arry6=["dasf" , 2 ,"asd" , 2 ,5]

function addSum (arry6){
    let sum = 0
    arry6.forEach(function(elm){
        if(typeof elm === 'number'){
            sum = sum + elm
        }
    })
    return sum
}
console.log(addSum(arry6))
