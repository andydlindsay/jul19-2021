/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // establish a variable to hold the lowest value
  let lowestVal = arr[0];

  // iterate through the array
  for (const num of arr) {
    // compare each element against the current lowest
    if (num < lowestVal) {
      // if lower, we want to replace the lowest value with the current element
      lowestVal = num;
    }
  }

  // return lowest value
  return lowestVal;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // set up a variable to hold highest value
  let highestVal = arr[0];

  // iterate through array
  for (const num of arr) {
    // compare each element against highest val
    if (num > highestVal) {
      // if higher, set highest val to current element
      highestVal = num;
    }
  }

  // return the highest value
  return highestVal;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const lowestVal = min(arr);
  const highestVal = max(arr);

  return highestVal - lowestVal;
};

// Don't change below:

module.exports = { min, max, range };
