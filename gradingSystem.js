/*
You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else.
*/

// variable declaration and initialization
var totalScore = 85;

// calculate grade using if-else ladder
if (totalScore >= 80)
{
    console.log('A grade');
}
else if (totalScore >= 60)
{
    console.log('B grade');
}
else if (totalScore >= 50)
{
    console.log('C grade');
}
else if (totalScore >= 40)
{
    console.log('D grade');
}
else {
    console.log('F grade');
}