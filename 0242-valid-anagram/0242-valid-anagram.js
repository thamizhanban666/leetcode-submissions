/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const arr = new Array(26).fill(0);
    for(i=0; i<s.length; i++){
        arr[s.charCodeAt(i) - 97] += 1;
        arr[t.charCodeAt(i) - 97] -= 1;
    }
    for(let n of arr) if(n !== 0) return false;
    return true;
};