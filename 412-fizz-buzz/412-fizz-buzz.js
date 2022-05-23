/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function (n) {
    let stringArr = [];
    for (let i = 1; i < n + 1; i++) {
        if (i % 15 == 0) {
            stringArr.push("FizzBuzz");
        } else if (i % 5 == 0) {
            stringArr.push("Buzz");
        } else if (i % 3 == 0) {
            stringArr.push("Fizz");
        } else stringArr.push(i.toString());
    }
    return stringArr;
};