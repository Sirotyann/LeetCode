const { findNumberIn2DArray } = require('./');

describe('Offer 04 Tests', () => {
    it("Matrix test", () => {
        const matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ];
        const five = findNumberIn2DArray(matrix, 5);
        expect(five).toBe(true);
        const twenty = findNumberIn2DArray(matrix, 20);
        expect(twenty).toBe(false);
    });


    it("Matrix test2", () => {
        const matrix = [[-5]];
        const five = findNumberIn2DArray(matrix, -5);
        expect(five).toBe(true);
    })
});
