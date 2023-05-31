function arraySign(nums: number[]): number {
let product :number = 1;
let sign: number = 0;

for (let i:number = 0; i < nums.length; i++){
    product = product * nums[i];
}

if(product > 0)
    sign = 1
else if (product < 0)
    sign = -1

return sign;
};