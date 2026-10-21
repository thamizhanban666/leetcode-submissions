/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(i=1; i<nums.length; i++){
        nums[i] += nums[i-1];
    }
    for(let i=0; i<nums.length; i++){
        let left = 0, right = 0;
        if(i != 0) left = nums[i-1]
        right = nums[nums.length-1] - nums[i];
        if(left === right) return i
    }
    return -1
};