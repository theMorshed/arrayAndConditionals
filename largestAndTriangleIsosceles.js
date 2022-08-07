/*
1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal
*/

// Problem One: Largest number find

// variable declaration
var numOne = 13;
var numTwo = 79;
var numThree = 45;

// find largest if-else ladder
if (numOne > numTwo && numOne > numThree)
{
    console.log('Largest number is: ' + numOne);
}
else if (numTwo > numOne && numTwo > numThree)
{
    console.log('Largest number is: ' + numTwo);
}
else 
{
    console.log('Largest number is: ' + numThree);
}

// Problem Two: Isosceles

// variable declare and initialize
var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

// trying to find two side are equal
if (firstSide == secondSide || firstSide == thirdSide) 
{
    console.log('Isosceles');
}
else 
{
    console.log('NOT Isosceles');
}
