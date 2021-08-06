/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if(k == 0) return [];
    const smallNums = [arr[0]];

    const insertToSmallNums = (n) => {
        if (smallNums[smallNums.length - 1] <= n) {
            smallNums.push(n);
        } else {
            const index = smallNums.findIndex(it => it > n);
            smallNums.splice(index, 0, n);
        }
    }

    for (let i = 1; i < arr.length; i++) {
        insertToSmallNums(arr[i]);
        if (smallNums.length > k) {
            smallNums.pop();
        }
    }

    return smallNums;
};

var getLeastNumbers2 = function (arr, k) {
    if (k === 0) return [];
    if (k >= arr.length) return arr;

    const shake = (arr, start, end) => {
        if (end <= start) {
            return;
        }
        let left = start, right = end, x = arr[start];
        while (left < right) {
            while (arr[right] > x && left < right) {
                right--;
            }
            if (left < right) {
                arr[left] = arr[right];
            }
            while (arr[left] < x && left < right) {
                left++;
            }
            if (left < right) {
                arr[right] = arr[left];
            }
        }
        arr[left] = x;

        if (left < (k - 1)) {
            shake(arr, left + 1, end);
        }
    }

    shake(arr, 0, arr.length - 1);
    return arr.slice(0, k);
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