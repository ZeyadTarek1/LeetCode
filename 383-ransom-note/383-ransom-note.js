/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function (ransomeNote, magazine) {
    let numberCount = {};
    let numberCountMagazine = {};
    for (let i = 0; i < ransomeNote.length; i++) {
        if (!numberCount[ransomeNote[i]]) {
            numberCount[ransomeNote[i]] = 1;
        } else {
            numberCount[ransomeNote[i]] = numberCount[ransomeNote[i]] + 1;
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        if (!numberCountMagazine[magazine[i]]) {
            numberCountMagazine[magazine[i]] = 1;
        } else {
            numberCountMagazine[magazine[i]] =
                numberCountMagazine[magazine[i]] + 1;
        }
    }
    for (const key in numberCount) {
        if (
            numberCountMagazine[key] < numberCount[key] ||
            !numberCountMagazine[key]
        )
            return false;
    }
    return true;
};