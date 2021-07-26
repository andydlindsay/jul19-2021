/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // setup a variable to hold our piles
  const piles = {};

  // iterate through the array
  for (const num of arr) {
    // have we seen this element before?
    if (piles[num]) {
      // if yes, increment the number of times seen
      piles[num] += 1;
    } else {
      // if no, add a new key/value pair to piles
      piles[num] = 1;
    }
  }

  // console.log(piles);

  // set up variables to hold highest value and key associated with highest value
  let highestVal = 0;
  let highestKey;

  // iterate through the object (piles)
  for (const key in piles) {
    const val = piles[key];
    // is the current value higher than our highest
    if (val > highestVal) {
      // if yes, replace highest value and key
      highestVal = val;
      highestKey = key;
    }
  }

  // return the key
  return highestKey;
};

// Don't change below:
module.exports = { mode };
