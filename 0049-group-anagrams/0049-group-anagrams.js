/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(const s of strs){
        const count = new Array(26).fill(0);
        for(let i=0; i<s.length; i++){
            count[s.charCodeAt(i) - 97]++ 
        }
        const key = count.join('-');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s);
    }

    return [...map.values()];
};