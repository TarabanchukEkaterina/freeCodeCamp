// DESCRIPTION:

// Complete the getGrade function that takes a number score as a parameter.
// Your function should return a string representing a letter grade based on the score.
// Here are the scores and their corresponding letter grades:

// Score Range 	Grade
// 100    	"A++"
// 90 - 99 	"A"
// 80 - 89 	"B"
// 70 - 79 	"C"
// 60 - 69 	"D"
// 0 - 59 	"F"

// SOLUTION:

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));//"A"
console.log(getGrade(82));//"B"
console.log(getGrade(56));//"F"