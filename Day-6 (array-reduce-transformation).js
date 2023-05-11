/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;

    // for(const num of nums){
    //     val = fn(val,num);
    // }

    // for(const index in nums){
    //     val = fn(val,nums[index]);
    // }

    nums.forEach((num) => {
        val = fn(val,num);
    });

    return val;
};