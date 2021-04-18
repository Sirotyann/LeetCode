const { spiralOrder } = require('./');

describe('剑指 Offer 29. 顺时针打印矩阵 Tests', () => {
    it('输入：matrix = [[1,2,3],[4,5,6],[7,8,9]] 输出：[1,2,3,6,9,8,7,4,5]', () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const result = spiralOrder(matrix);
        expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] 输出：[1,2,3,4,8,12,11,10,9,5,6,7]', () => {
        const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
        const result = spiralOrder(matrix);
        expect(result).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });
});
