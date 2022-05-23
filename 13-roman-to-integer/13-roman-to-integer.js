/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanSymbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        answer = answer + romanSymbols[char];
    }

    if (s.includes("IV")) answer = answer - 2;
    if (s.includes("IX")) answer = answer - 2;
    if (s.includes("XL")) answer = answer - 20;
    if (s.includes("XC")) answer = answer - 20;
    if (s.includes("CD")) answer = answer - 200;
    if (s.includes("CM")) answer = answer - 200;

    return answer;
    
    
    
};