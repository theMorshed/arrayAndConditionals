/*
You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/
 
// declare varibale and initialize
var fruits = ['Apple', 'Banana', 'Orange'];

// a. find the index of banana and replace it with mango
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';

// b. remove orange and add watermelon
fruits.pop(); // remove orange or last item
fruits.push('Watermelon'); // add watermelon

console.log(fruits);
