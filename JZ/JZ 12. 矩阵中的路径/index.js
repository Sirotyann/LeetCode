/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const chars = word.split('');
    const row_max = board.length - 1;
    const col_max = board[0].length - 1;

    const findPath = (path_board, row, column, count) => {
        if( count == chars.length) {
            return true;
        } else if (row < 0 || column < 0 ||
            row >= path_board.length ||
            column >= path_board[0].length ||
            path_board[row][column] == '' ||
            path_board[row][column] != chars[count]) {
            return false;
        } else {
            path_board[row][column] = '';
            let result = findPath(path_board, row + 1, column, count + 1) ||
                findPath(path_board, row - 1, column, count + 1) ||
                findPath(path_board, row, column + 1, count + 1) ||
                findPath(path_board, row, column - 1, count + 1);
            path_board[row][column] = chars[count];
            return result
        }
    }

    for (let row = 0; row <= row_max; row++) {
        for (let column = 0; column <= col_max; column++) {
            if (findPath(board, row, column, 0)) {
                return true;
            }
        }
    }
    return false;
};

/*
var exist = function (board, word) {
    const chars = word.split('');
    const row_max = board.length - 1;
    const col_max = board[0].length - 1;

    const findPath = (coords) => {
        if (coords.length === chars.length) {
            return true;
        }
        const next_val = chars[coords.length];
        const current_coord = coords[coords.length - 1]
        const candidate_coords = [
            [current_coord[0] - 1, current_coord[1]],
            [current_coord[0] + 1, current_coord[1]],
            [current_coord[0], current_coord[1] - 1],
            [current_coord[0], current_coord[1] + 1]
        ].filter(([row, col]) => (
            row >= 0 && col >= 0 && row <= row_max && col <= col_max &&
            !coords.find(([r, c]) => (r == row && c == col))
        ));

        let result = false;
        if (candidate_coords.length) {
            for (let i = 0; i < candidate_coords.length; i++) {
                const [row, col] = candidate_coords[i];
                if (board[row][col] == next_val) {
                    const current_coords = coords.slice()
                    current_coords.push([row, col]);
                    result = findPath(current_coords);
                    if (result) {
                        break;
                    }
                }
            }
        }

        return result;
    }

    for (let row = 0; row <= row_max; row++) {
        for (let col = 0; col <= col_max; col++) {
            if (board[row][col] === chars[0]) {
                if (findPath([[row, col]])) {
                    return true;
                }
            }
        }
    }
    return false;
};
*/

module.exports = { exist };

/*
["A", "B", "C", "E"],
["S", "F", "C", "S"],
["A", "D", "E", "E"]
*/
/*
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。



示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false


提示：

1 <= board.length <= 200
1 <= board[i].length <= 200
注意：本题与主站 79 题相同：https://leetcode-cn.com/problems/word-search/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
