/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix == null || matrix.length == 0) return matrix;
    const result = [];
    let direction = 'right';
    let top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1;
    let i = 0; j = 0;
    while (result.length < matrix.length * matrix[0].length) {
        result.push(matrix[i][j]);

        switch (direction) {
            case 'right':
                if (j == right) {
                    i += 1;
                    top += 1;
                    direction = 'down';
                } else {
                    j += 1;
                }
                break;
            case 'down':
                if (i == bottom) {
                    j -= 1;
                    right -= 1;
                    direction = 'left';
                } else {
                    i += 1;
                }
                break;
            case 'left':
                if (j == left) {
                    i -= 1
                    bottom -= 1;
                    direction = 'up';
                } else {
                    j -= 1;
                }
                break;
            case 'up':
                if (i == top) {
                    j += 1
                    left += 1;
                    direction = 'right';
                } else {
                    i -= 1;
                }
                break;
        }
    }

    return result;
};

module.exports = { spiralOrder };

/*
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。



示例 1：

输入：matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]


限制：

0 <= matrix.length <= 100
0 <= matrix[i].length <= 100
注意：本题与主站 54 题相同：https://leetcode-cn.com/problems/spiral-matrix/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
