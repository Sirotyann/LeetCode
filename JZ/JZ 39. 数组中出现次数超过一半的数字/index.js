/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let temp = nums[0];
    let vote = 1;
    for (let i = 1; i < nums.length; i++) {
        if (temp === nums[i]) {
            vote++;
        } else {
            vote--;
        }
        if (vote === 0) {
            temp = nums[i + 1];
        }
    }
    return temp;
};

module.exports = { majorityElement };

/**
 * 
 * https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1


Follow-up: Could you solve the problem in linear time and in O(1) space?
 */
