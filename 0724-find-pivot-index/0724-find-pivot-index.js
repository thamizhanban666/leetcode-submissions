/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i=0; i<nums.length; i++){
        let lsum = 0; rsum = 0;
        for(j=0; j<i; j++){
            lsum += nums[j]
        }
        for(j=i+1; j<nums.length; j++){
            rsum += nums[j]
        }
        if(lsum === rsum) return i
    }
    return -1
};