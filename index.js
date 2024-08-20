function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  //new set carries only set of values
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
*/

/* 
  Add your pseudocode here
  hasTargetSum will iterate through the list of numbers, add them into a new list, and at the same time 
  checking if each number, when subtracted by the target,produces a number that exists in the new list of numbers.
  if the number exists in the list, return true
  else return false. 
*/

/*
  Add written explanation of your solution here
  hasTargetSum takes in an array of numbers and a target number as parameters.
  A new set is created called seenNumbers that will store the numbers thar have been compared to the target to see if
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 10, 28, 3, 19], 22));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
