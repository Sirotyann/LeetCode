/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if (k === 0) return null;
    if (k >= arr.length) return arr;

    const swap = (i, j) => {
        
    }

    const shake = () => {
        let left = 1, right = arr.length - 1;
        while(left < right) {

        }
    }

    return shake();
};

module.exports = { getLeastNumbers };

/*

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。



示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]


限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/