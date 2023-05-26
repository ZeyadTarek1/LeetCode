function containsDuplicate(nums: number[]): boolean {
let numObject = {};

for (let i = 0; i < nums.length; i++){
    if(numObject[nums[i]]){
        numObject[nums[i]]++;
        return true
    }
    else{
        numObject[nums[i]] = 1;
    }
}

console.log(numObject)
return false;
};