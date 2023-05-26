function twoSum(nums: number[], target: number): number[] {

let answerArr: number[] = []
for ( let i: number = 0; i < nums.length-1; i++){
    let start: number = i;
    for (let j :number = start+1; j < nums.length; j++){
        if ((nums[start]+ nums[j]) === target){
            answerArr = [start,j]
            return answerArr

        }
    }
}

return [0]

};