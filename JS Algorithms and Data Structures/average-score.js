// DESCRIPTION:

// Complete the getAverage function which takes in an array of test scores and returns the average score.
// The average is calculated by adding up all the scores and dividing by the total number of scores.

// SOLUTION:

function getAverage(scores) {
  let totalNumberScores = scores.length;
  let sumOfAllScores = 0;

  scores.forEach(function (num) {
    sumOfAllScores += num;
  });
  let average = sumOfAllScores / totalNumberScores;

  return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4