/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const res = [];
    for(let num of nums){
        let currCount = (map.get(num) || 0) + 1
        map.set(num, currCount)
    }
    const bucket = new Array(nums.length + 1).fill([]);
    for(const [num, freq] of map){
        if(bucket[freq].length === 0) bucket[freq] = [];
        bucket[freq].push(num);
    }

    for(let i=bucket.length-1; i>=0; i--){
        let curr = bucket[i];
        if(k <= 0) break;
        else if(curr.length > k) res.push(...curr.slice(0, k))
        else res.push(...curr)
        k = k - curr.length;
    }

    return res;
};