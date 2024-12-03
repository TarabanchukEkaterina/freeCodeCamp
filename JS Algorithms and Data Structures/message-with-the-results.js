// Representing a message to the student

// DESCRIPTION:

// Now that the teacher has all of the information they need, they want to be able to message the student with the results.
// Complete the studentMsg function with totalScores and studentScore for parameters.
// The function should return a string representing a message to the student.
// Replace average - goes - here with the average of the total scores.
// Replace grade - goes - here with the student's grade.
// Use the getAverage function to get the class average.
// Use the getGrade function to get the student's grade.
// Use string concatenation(+) to build the message.
// Be careful with the punctuation and spaces in the message.

// SOLUTION:

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

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

function studentMsg(totalScores, studentScore) {
  if (getGrade(studentScore) !== "F") {
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
  }
  return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";


}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));