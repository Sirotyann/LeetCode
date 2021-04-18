const { validateStackSequences } = require('./');

describe('剑指 Offer 31. 栈的压入、弹出序列 Tests', () => {
    it('输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1] 输出：true', () => {
        expect(validateStackSequences([1,2,3,4,5], [4,5,3,2,1])).toBe(true);
    });

    it('输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2] false', () => {
        expect(validateStackSequences([1,2,3,4,5], [4,3,5,1,2])).toBe(false);
    });
});
