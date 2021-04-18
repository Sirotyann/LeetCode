/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let odd_index = 0;
    let even_index = nums.length - 1;

    while (odd_index < even_index) {
        if ((nums[odd_index] & 1) === 0 && (nums[even_index] & 1) === 1) {
            const tmp = nums[odd_index];
            nums[odd_index] = nums[even_index];
            nums[even_index] = tmp;
            odd_index += 1;
            even_index -= 1;
        } else {
            if ((nums[odd_index] & 1) === 1) {
                odd_index += 1;
            }
            if ((nums[even_index] & 1) === 0) {
                even_index -= 1;
            }
        }
    }

    return nums;
};

module.exports = { exchange };

/*
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。



示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4]
注：[3,1,2,4] 也是正确的答案之一。


提示：

0 <= nums.length <= 50000
1 <= nums[i] <= 10000
通过次数122,973提交次数191,704

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/