/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n < 2) {
        return 1;
    } else {
        const nums = [1, 1];
        let index = 2;
        while (nums.length <= n) {
            nums[index] = nums[index - 1] + nums[index - 2];
            index++;
        }
        return nums[n];
    }
};

/*
f(0) = 1
f(1) = 1
f(2) = 2
f(3) = f(2) + f(1)
f(4) = f(3) + f(2)
*/

/*
var numWays = function (n) {
    const memo = {};
    const fn = (n) => {
        if (memo[n] != null) {
            return memo[n];
        } else if (n >= 2) {
            const num = (numWays(n - 1) + numWays(n - 2));
            memo[n] = num;
            return num;
        } else if (n === 0 || n === 1) {
            return 1;
        }
    }
    return fn(n, {});
};
*/

module.exports = { numWays };

/*
剑指 Offer 10- II. 青蛙跳台阶问题
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1
提示：

0 <= n <= 100
注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/


*/