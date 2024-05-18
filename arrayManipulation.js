// arrayManipulation.js

/*
 * @param {number[]} arr 
 * @returns {number[]} 
 */
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}
module.exports = { processArray };
