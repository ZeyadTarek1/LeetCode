function lengthOfLastWord(s: string): number {
let length: number = 0;

let counter:number = 1;
let words:string[] = [""];
let lastWord:string ="";
let lastWordLetters:string[] = [""];

words = s.split(" ");
lastWord = words[(words.length)-1];

while(!lastWord.replace(/\s/g, '').length){
  counter++
  lastWord = words[words.length-counter]
}

lastWordLetters = lastWord.split("");
length = lastWordLetters.length;

return length;
};