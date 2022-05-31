// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.



// my original solution

function getAge(inputString){
    return Number(inputString[0])
}

// what I learned from others' solutions

function getAge(inputString){
    return parseInt(inputString) // parse int will run integer from a string, so no need to write out the index
}

const getAge = parseInt //Don't even need a full function as passing inputString to getAge holding parseInt will return the integer

