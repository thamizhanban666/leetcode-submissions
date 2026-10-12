/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for(let n of nums){
        if(set.has(n)) return true
        else set.add(n)
    }

    return false;
};