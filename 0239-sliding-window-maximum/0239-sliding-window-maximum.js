/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxsArr = [];
    let deque = [];

    for (let i = 0; i < nums.length; i++) {
        if (deque[0] < i - k + 1) deque.shift();
        while (nums[deque[deque.length - 1]] < nums[i]) deque.pop();
        deque.push(i);
        if (i >= k - 1) maxsArr.push(nums[deque[0]]);
    }

    return maxsArr;
};
