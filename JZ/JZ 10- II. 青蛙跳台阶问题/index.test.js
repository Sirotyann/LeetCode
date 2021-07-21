const { numWays } = require('./');

describe('剑指 Offer 10- II. 青蛙跳台阶问题 Tests', () => {
    it('2', () => {
        expect(numWays(2)).toBe(2);
    });

    it('0', () => {
        expect(numWays(0)).toBe(1);
    });

    it('7', () => {
        expect(numWays(7)).toBe(21);
    });
});
