// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// my original solution

function squareDigits(num){
    return Number(num.toString().split("").map(num => parseInt(num) ** 2).join(""))
}


// what I learned from others' solutions

function squareDigits(num){
    return Number(("" + num).split("").map(num => parseInt(num) ** 2).join("")) // can optionally add num to an empty string to change types
}