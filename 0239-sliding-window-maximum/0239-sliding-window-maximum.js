/**
 * @auther SalmanIyad
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxsArr = new Array(nums.length - k + 1);
    let deque = new Array(k);
    let front = 0, back = 0;

    for (let i = 0; i < nums.length; i++) {
        if (front < back && deque[front] < i - k + 1) front++;
        while (front < back && nums[deque[back - 1]] <= nums[i]) back--;
        deque[back++] = i;
        if (i >= k - 1) maxsArr[i - k + 1] = nums[deque[front]];
    }

    return maxsArr;
};