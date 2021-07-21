/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        let prev_2 = 1, prev_1 = 1, result = 0, i = 3;
        while (i <= n) {
            result = prev_1 + prev_2;
            prev_2 = prev_1;
            prev_1 = result;
            i++;
        }
        return result
    }
};

// var fib = function (n) {
//     const memo = new Map([[0, 0], [1, 1]]);
//     const fibWithMemo = (n, memo) => {
//         if (memo.has(n)) {
//             return memo.get(n);
//         } else {
//             const result = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo)
//             memo.set(n, result)
//             return result;
//         }
//     }
//     return fibWithMemo(n, memo);
// };

module.exports = { fib };

/*
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

0, 1, 1, 2, 3, 5, 8


示例 1：

输入：n = 2
输出：1
示例 2：

输入：n = 5
输出：5


提示：

0 <= n <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/