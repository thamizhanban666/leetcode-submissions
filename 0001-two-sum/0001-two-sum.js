/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const need = map[target - nums[i]];
        if (need >= 0) return [need, i];
        map[nums[i]] = i;
    }
};