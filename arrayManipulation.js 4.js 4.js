// arrayManipulation.js

/*
 * @param {string[]} strArr 
 * @param {number[]} numArr 
 * @returns {string[]} 
 */
function formatArrayStrings(strArr, numArr) {
    return strArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

module.exports = { processArray, formatArrayStrings };
