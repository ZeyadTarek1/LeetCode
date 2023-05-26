function isAnagram(s: string, t: string): boolean {

let sLetters:{} = {};
let tLetters:{} = {};

[...s].forEach((c) => {
    if (sLetters[c]) {
        sLetters[c]++;
    } else {
        sLetters[c] = 1;
    }
});

[...t].forEach((c) => {
    if (tLetters[c]) {
        tLetters[c]++;
    } else {
        tLetters[c] = 1;
    }
});

let sortedS = Object.keys(sLetters).sort().reduce(
  (obj, key) => { 
    obj[key] = sLetters[key]; 
    return obj;
  }, 
  {}
);

let sortedT = Object.keys(tLetters).sort().reduce(
  (obj, key) => { 
    obj[key] = tLetters[key]; 
    return obj;
  }, 
  {}
);

return JSON.stringify(sortedS) === JSON.stringify(sortedT)? true : false
};