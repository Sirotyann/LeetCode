/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    const canMoveTo = (row, col) => (
        row >= 0 && col >= 0 && row < m && col < n && 
        `${row}${col}`.split('').reduce((acc, it) => (acc + parseInt(it)), 0) <= k);
    const footprints = new Set();
    const pass = (row, col) => { footprints.add(`${row}-${col}`) }
    const isPassed = (row, col) => (footprints.has(`${row}-${col}`));
    const move = (row, col) => {
        if (canMoveTo(row, col) && !isPassed(row, col)) {
            pass(row, col);
            move(row + 1, col);
            move(row - 1, col);
            move(row, col + 1);
            move(row, col - 1);
        }
    }
    move(0, 0);
    return footprints.size;
};

module.exports = { movingCount };

/*
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/