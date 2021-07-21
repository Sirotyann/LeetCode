const { exist } = require('./');

describe('剑指 Offer 12. 矩阵中的路径 Tests', () => {
    it('found', () => {
        const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
        const word = "ABCCED";
        expect(exist(board, word)).toBe(true);
    });

    it('not found', () => {
        const board = [["a", "b"], ["c", "d"]];
        const word = "abcd";
        expect(exist(board, word)).toBe(false);
    });

    it('found 2', () => {
        const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
        const word = "SEE";
        expect(exist(board, word)).toBe(true);
    });

    it('found 3', () => {
        const board = [["C","A","A"],["A","A","A"],["B","C","D"]];
        const word = "AAB";
        expect(exist(board, word)).toBe(true);
    });
});
