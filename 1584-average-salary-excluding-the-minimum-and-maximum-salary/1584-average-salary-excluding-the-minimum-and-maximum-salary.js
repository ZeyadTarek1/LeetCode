/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = salary[0];
    let max = salary[0];
    let sum = 0;
    for(let i = 0; i < salary.length; i++){
        if (salary[i] < min)
            min = salary[i]
        
        if(salary[i] > max)
            max = salary[i]

        sum += salary[i]        
    }

    sum = sum - min;
    sum = sum - max
    let average = sum/((salary.length)-2);
    return average;
};