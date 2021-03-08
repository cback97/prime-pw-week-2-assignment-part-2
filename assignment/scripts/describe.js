// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and set it's value to 'Dane' as a string.
// Next we see if name is an exact match to 'Mary' to console.log 'Hi, Mary!'
// We find that name is not an exact match to 'Mary', so
// we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we create a variable called secret and do not assign it a value.
// Next we create a variable called code and assign it the value of 123 as a number.
// code is an exact match to number 123, the new value of secret is string 'super',
// and new value of code is 246.
//code is not an greater than 250 therefore the value of secret does not change.
//We console.log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We assign variable isStudent boolean value true, variable age number value 34, 
// variable zip number value 55407
// isStudent is an exact match to true however zip is not greater than 80000, 
// we will NOT console.log `You're a student on the West Coast!`
// isStudent is not an exact match to false nor is age less than 30,
// we will NOT console.log 'What are your hobbies?'
//isStudent IS an exact match to true, we will console.log 'Welcome to Prime'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//ERROR- colorOne is set to red, colorTwo is set to blue
//CORRECTION- colorOne should be set to blue, colorTwo should be set to red per instructions.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//ERROR- only colorOne value changed to string value 'purple'.
//CORRECTION- colorOne and colorTwo will be converted to string value 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

//ERROR- keyword time is declared as a constant.
//CORRECTION- keyword time must be declared as a variable per the instructions.
// let time = 4;
let temp = 40;
const time = 4;


//ERROR- Compound conditional is declared that either condition can be true.
//CORRECTION- Compound Condtion must be declared as both conditions must be true 
 //(temp > 39 && time >= 4) 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
//ERROR- keyword minAge is delcared as a constant.
//CORRECTION- let minAge = 21;
let age = 21;
const minAge = 21;

//ERROR- condition reads if minAge is less than or equal to age
//CORRECTION- if(age >= minAge)
if(minAge <= age) {
//ERROR- console.log reads no entry for fulfilled condition
//CORRECTION- console.log must read 'enter' for fulfilled condition
  console.log('no entry');
} 
ERROR- else condition included
CORRECTION- remove else condtional as if-else conditional was not in desctiption.
else {
  console.log('enter');
}
*/

