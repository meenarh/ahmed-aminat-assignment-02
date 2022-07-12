// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;
  for(let i = 0; i < arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i];
  };
    return sum;  
  // return arrayOfNumbers.length;
}

console.log(sumOfNumbers([3, 7, 9, 5]));
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
  let count = 0;
  
  for(let i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] % 2 === 0){
      count++;
    }
  }
    return count;
}
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
assignment.countEvenNumbers = countEvenNumbers;



// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

